const Products = require("../models/Products");
const Trademarks = require("../models/Trademarks");
const Types = require('../models/Types');

const ProductController = {

    insertProduct : async(req,res) => {
        try {
            const product = await new Products ({
                id : req.body.id ,
                title : req.body.title ,
                price : req.body.price ,
                description : req.body.description , 
                image : req.body.image , 
                size : req.body.size , 
                type : req.body.type ,
                trademark : req.body.trademark 
            })
            
            const product_save = await product.save() ;
            if(product_save) {
                res.status(200).json(product_save);
            } else {
                res.status(404).json({error : "No save product"});
            }
        } catch (error) {
            
        }
    } ,

    insertthuoctinh : async(req,res) => {

        // update all documents in products collection
        Products.updateMany({}, { $set: { type: '642e1a24e10e1e6322834816' } },)
            .then((v) => {
                res.json(v);
            })
            .catch((err) => {
                res.json(err);
            })

    },

    listProduct : async(req , res) => {
        try {
            const list = await Products.find().populate('type').populate('trademark');
            res.status(200).json(list);
        } catch (error) {
            res.status(404).json(error);
        }

    },

    editProduct : async(req,res) => {
        try {
            console.log(res.body);
            // tìm xem sản phẩm đó có trong database ko 
            const productdatabase = await Products.findByIdAndUpdate(req.body._id, 
                    {title : req.body.title ,
                        price : req.body.price ,
                        description : req.body.description , 
                        image : req.body.image , 
                        size : req.body.size , 
                        type : req.body.type ,
                        trademark : req.body.trademark } 
            );
            if(!productdatabase) {
                res.status(500).json({message : "error edit product"});
            } else {
                res.status(200).json(productdatabase);
            }
        } catch (error) {
            
        }
    },

    findProduct : async(req , res) => {
        try {
            const productdatabase = await Products.findById(req.params.id) ;
            if(productdatabase) {
                res.status(200).json(productdatabase);
            } else {
                res.status(404).json({message : "error"});
            }
        } catch (error) {  
            res.status(404).json({message : "error !!"});
        }
    },

    delProduct : async(req , res) => {
        try {
                const productdatabase = await Products.deleteOne({_id : req.body._id});
            if (productdatabase.deletedCount > 0) {
                    res.json('Xóa thành công');
                } else {
                    res.json('Không tìm thấy document để xóa');
                }
        } catch (error) {
            res.json(error);
        }
    },

    insertTrademark : async(req , res) => {
        try {
            const trademark = await new Trademarks({
                title : req.body.title 
            })
            const trademarksave = await trademark.save() ;
            res.status(200).json(trademarksave);
        } catch (error) {
            res.status(404).json(error);
        }
    } , 

    listTrademark : async(req,res) => {
        try {
            const trademark = await Trademarks.find();
            res.status(200).json(trademark);
        } catch (error) {
            res.status(404).json(error);
        }
    } ,

    insertType : async(req , res) => {
        try {
            const type = await new Types({
                title : req.body.title 
            })
            const typesave = await type.save() ;
            res.status(200).json(typesave);
        } catch (error) {
            res.status(404).json(error);
        }
    }, 

    Typeid : async(req,res) => {
        try {
            const onetype = await Types.findById(req.params.id);
            if(!onetype) {
                res.status(404).json({message : "no id type"})
            } else {
                res.status(200).json(onetype);
            }
        } catch (error) {
            res.status(404).json(error);
        }
    } , 

    listType : async(req,res) => {
        try {
            const type = await Types.find();
            res.status(200).json(type);
        } catch (error) {
            res.status(404).json(error);
        }
    },

    editType : async(req,res) => {
        try {
            // tìm xem sản phẩm đó có trong database ko 
            const typedatabase = await Types.findByIdAndUpdate(req.body._id , {title : req.body.title});
            if(!typedatabase) {
                res.status(500).json({message : "error find"});
            } else {
                res.status(200).json(typedatabase);
            }
           
        } catch (error) {
            res.status(404).json(error);
        }
    } , 
    deleteType: async (req, res) => {
        try {
          const typedel = await Types.deleteOne({ _id: req.body._id });
          if (typedel.deletedCount > 0) {
            res.json('Xóa thành công');
          } else {
            res.json('Không tìm thấy document để xóa');
          }
        } catch (error) {
          res.status(404).json(error);
        }
      }

}


module.exports = ProductController ;