const express = require('express');
const router=express.Router();
const mProject=require('../models/project');

router.get('/', function (req, res) {
  mProject.getAll()
  .then(rows=>{
      res.render('project',{data:rows});
  })
  .catch(err=>{
    res.send(err);
  })
})

router.get('/add', function (req, res) {
  res.render('projectAdd');
})

router.post('/add', function (req, res) {
  // res.send(req.body);
  mProject.add(req.body)
  .then(()=>{
      res.redirect('/project');
  })
  .catch(err=>{
    res.send(err);
  })
})

// app.get('/', function(req, res) {
//     res.render('pages/index');
// });

module.exports=router;
