var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('partials/user/examples/package', {title: 'tiếng anh căn bản'});
});

module.exports = router;