var express = require('express');
var router = express.Router();
const mainHelpers = require('../helpers/mainhelpers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index/main');
});

router.post('/submit',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);
  mainHelpers.addDetails(req.body,(id)=>{
    console.log(id)
    let image=req.files.Image
    image.mv("./public/images/"+id+".jpg",(err,done)=>{
      if(!err){
        res.redirect('/')
      }else{
        console.log(err);
      }
    })
  })
})

module.exports = router;
