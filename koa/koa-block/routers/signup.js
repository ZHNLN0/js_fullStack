const router = require('koa-router')();
const controller = require('../controllers/c-signup')
// router -> controller -> modek | view

// render ejs
router.get('/signup', controller.getSignup)
// model save 
router.get('/signin')

module.exports = router