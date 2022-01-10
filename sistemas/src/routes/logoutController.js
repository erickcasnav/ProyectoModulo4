const express = require('express');
const router=express.Router();
router.get('/logout',(req,res)=>{

   res.end('Bienvenido al logout');
    //res.render('index/index');
});
module.exports=router;