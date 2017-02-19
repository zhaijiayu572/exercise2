var express = require('express');
var router = express.Router();
var user = require('../controllers/user.js');
var blog = require('../controllers/blog');
/* GET home page. */
router.get('/', user.index);
router.get('/index',user.index);
router.get('/login',user.login);
router.post('/do_login',user.do_login);
router.get('/exit',user.exit);
router.get('/show_details',blog.show_detail);
router.get('/add_blog',blog.add_blog);
router.post('/do_add_blog',blog.do_add_blog);
module.exports = router;
