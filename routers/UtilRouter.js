const router = require('express').Router();
const Utils = require('../controllers/UtilsController');

// NAV FATHER
router.post('/nav_father' , Utils.nav_father) ;

// NAV CHILD
router.post('/nav_child' , Utils.nav_child);


// LIST NAV FATHER
router.get('listnav_father' , Utils.nav_father);

// LIST NAV 
router.get('/list' , Utils.ListNav);

// INSERT COMMENT 
router.post('/insertcomment' , Utils.insert_comment)

router.post('/list_comment/' , Utils.list_comment ) 


module.exports = router ;
