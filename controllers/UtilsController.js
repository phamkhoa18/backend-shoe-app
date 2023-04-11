var {Nav_child , Nav_father }= require('../models/Util');
var Comments = require('../models/Comment');
var Products = require('../models/Products');
const Utils = {
    nav_father : async(req,res) => {
        try {
            const father = await new Nav_father({
                title : req.body.title ,
                value : req.body.value
            })

            const fatherdata = await Nav_father.findOne({title : father.title});
            if(!fatherdata) {
                const fathersave = await father.save();
                res.status(200).json(fathersave);
            }else {
                res.status(404).json({message : "Exist title nav_child"});
            }
        } catch (error) {
            res.status(404).json({message : error});
        }
    },

    nav_child : async(req,res) => {
        try {
            const child = await new Nav_child({
                title : req.body.title ,
                value : req.body.value 
            })
            const childdata = await Nav_child.findOne({title : child.title});
            if(!childdata) {
                const childsave = await child.save()
                    .then(async () => {
                        const save = await Nav_father.findOneAndUpdate({_id : req.body.selectfather} , {$push : {bump : child._id}})
                            res.status(200).json(save);
                    })
                    .catch((err) => {
                        res.status(404).json("Lỗi ỡ phần lưu ");
                    })

            }else {
                res.status(404).json({message : "Exist title nav_child"});
            }
        } catch (error) {
            res.status(404).json({message : error});
        }
    },

    ListNav : async(req , res) => {
        try {
            const list = await Nav_father.find().populate('bump');
            res.status(200).json(list);
        } catch (error) {
            res.status(404).json(error);
        }
    },

    // insert comment 

    insert_comment : async(req,res) => {
        try {
            const insert = await Comments({
                content : req.body.content ,
                author : req.body.author ,
                productid : req.body.productid ,
                date : Date.now()
            })

            const save = await insert.save();
            res.status(200).json(save);
        } catch (error) {
            res.status(404).json(error);
        }
    },

    list_comment : async(req,res) => {
        try {
            const list = await Comments.find({productid : req.body.productid});       
            res.status(200).json(list);
        } catch (error) {
            res.status(404).json(error);
        }
    }

}

module.exports = Utils ;