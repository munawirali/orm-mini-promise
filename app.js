const express = require('express');
const app=express();
const index=require('.routes/index');
const bodyParser=require('body-parser');

app.set('view engine', 'ejs');
app.use('index',index);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
