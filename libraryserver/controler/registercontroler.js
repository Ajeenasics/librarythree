var registerschema=require('../model/registerschema')

var studentregisterdata=async(req,res)=>{
    const registerdata=new registerschema({
    studentname:req.body.studentname,
    studentnumber:req.body.studentnumber,
    studentemail:req.body.studentemail,
    studentpassword:req.body.studentpassword

    });
    await registerdata.save()
    .then(data=>{
        res.json({
            msg:"student data registerd"
        })
    })
    .catch(err=>{
        res.json({
            msg:"not register data"
        })
    })

}
const viewOne = async(req,res) =>{
    const {studentemail,studentpassword}=req.body
    let data=await registerschema.findOne({studentemail:studentemail})
    if(data){
      if(data.studentpassword==studentpassword){
        res.json({
          status:200,
          data:data

        })
      }
      else{
        res.json({
            status:500,
            msg:" password is incorect"
        })
           
        
      }
    }
    else{
      res.json({
        status:500,
        msg:"email is incorect"
      })
    }
    
  }
const findstudentprofile=(req,res)=>{
  const id= req.params.id
  registerschema.findById(id)
  .then((data)=>{
    res.json({
      msg:"profile view",
      data:data
    })
  })
  .catch(err=>{
    res.json({
      msg:"not view",
      err:err
    })
  })
}


module.exports={studentregisterdata,viewOne,findstudentprofile}
