const router = require('express').Router();
const UserController = require('../controllers/UsersController');

// ĐĂNG KÝ
router.post('/register' , UserController.Register);

// LOGIN
router.post('/login' , UserController.Login);



module.exports = router ;