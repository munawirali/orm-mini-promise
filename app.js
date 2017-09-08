const express = require('express');
const app=express();
const index=require('./routes/index');
const project=require('./routes/project');
const bodyParser=require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.set('view engine', 'ejs');
app.use('/',index);
app.use('/project',project);

app.listen(5500, function () {
  console.log('Example app listening on port 5500!')
})
