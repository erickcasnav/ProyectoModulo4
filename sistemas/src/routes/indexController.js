const express = require('express');
const router=express.Router();
router.get('/',(req,res)=>{

   // res.end('Bienvenido al servidor de NodeJS de Erick Castro, Proyecto');
    res.render('index/index');
});
module.exports=router;
