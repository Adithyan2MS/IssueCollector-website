var express = require('express');
const mainhelpers = require('../helpers/mainhelpers');
var router = express.Router();
const mainHelpers = require('../helpers/mainhelpers');


/* GET users listing. */
router.get('/', function(req, res, next) {

  mainhelpers.getDetails().then((details)=>{    
    console.log(details);
    res.render('admin/view-details',{details})

  })
});


module.exports = router;
