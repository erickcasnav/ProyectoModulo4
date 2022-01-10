const express = require('express');
const router=express.Router();
router.get('/home',(req,res)=>{

   res.end('Bienvenido al Home');
    //res.render('index/index');
});
module.exports=router;