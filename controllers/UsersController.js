var Users = require('../models/Users');
var bcrypt = require('bcrypt');
const UserController = {

    Register : async (req,res) => {
        try {
            const user = await new Users ({
                name : req.body.name ,
                email : req.body.email ,
                password : req.body.password,
                admin : true 
            })
            const userexist = await Users.find({email : user.email});
            if(userexist.length == 0) {
                // Tạo salt để sử dụng cho việc mã hóa mật khẩu
                const salt = bcrypt.genSaltSync(10);
                const hastpw = bcrypt.hashSync(user.password , salt);
                user.password = hastpw ;
                const usersave = await user.save();
                res.status(200).json(usersave);
            } else {
                res.status(404).json({message : "user exist"});
            } 
        } catch (error) {
            res.status(404).json(error);
        }
    } ,

    Login : async(req , res) => {
        try {
            const user = await new Users ({
                email : req.body.email ,
                name : req.body.name ,
                password : req.body.password
            })
            const userdatabase = await Users.findOne({email : user.email});
            if(!userdatabase) {
                res.status(404).json({message : "error password or username"});
            }else {
                const ispw =await bcrypt.compareSync(user.password,userdatabase.password);
                if(ispw) {
                    res.status(200).json(userdatabase);
                } else {
                    res.status(404).json({message : "error password or username"});
                }
            }
       
        } catch (error) {
            res.status(404).json(error);
        }
    }

}


module.exports = UserController ;