const express = require('express');
const router=express.Router();
router.get('/registrar',(req,res)=>{

   res.end('Bienvenido al registrar');
    //res.render('index/index');
});
module.exports=router;