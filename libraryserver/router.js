var express=require("express")
var router=express.Router()

var registercontroler=require('./controler/registercontroler')

router.post('/registerdata',registercontroler.studentregisterdata)
router.post('/find',registercontroler.viewOne)
router.get('/profileview',registercontroler.findstudentprofile)
module.exports=router