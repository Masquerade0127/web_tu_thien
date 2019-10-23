var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/examples/package', {title: 'tiếng anh căn bản'});
});

router.get('/partials/user/examples/package.hbs', function(){
  res.render('partials/user/examples/package');
});

module.exports = router;