const router = require('express').Router();
const ProductController = require("../controllers/ProductsController");
const UserController = require('../controllers/UsersController');

// ADD PRODUCT 
router.post('/insertProduct' , ProductController.insertProduct);

// LIST PRODUCT 
router.get('/listProduct' , ProductController.listProduct);

// FIND PRODUCT
router.get('/listProduct/:id' , ProductController.findProduct);

// EDIT PRODUCT 
router.post('/editproduct' , ProductController.editProduct);

// DEL PRODUCT 
router.post('/delproduct' , ProductController.delProduct);

// ADD THUOCTINH 
router.get('/insertthuoctinh' , ProductController.insertthuoctinh);

// ADD TRADEMARK 
router.post('/insertTrademark' , ProductController.insertTrademark);

// LIST TRADEMARK
router.get('/listtrademark' , ProductController.listTrademark);

// ADD TYPE 
router.post('/insertType' , ProductController.insertType);

// FIND TYPE
router.get('/listtype/:id' , ProductController.Typeid);

// LIST TYPE
router.get('/listtype' , ProductController.listType);

// EDIT TYPE 
router.post('/edittype' , ProductController.editType);

// DELETE TYPE 
router.post('/deletetype' , ProductController.deleteType);
module.exports = router ;