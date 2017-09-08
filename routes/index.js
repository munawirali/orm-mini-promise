const express = require('express');
const router=express.Router();
// const index=require('./views/index.ejs');

router.get('/', function (req, res) {
  res.render('index')
})

// app.get('/', function(req, res) {
//     res.render('pages/index');
// });

module.exports=router;
