/////////////
///require///
/////////////
// import the package that will be our server
const express = require('express');
//import this package so we can get data off req.body
const bodyParser = require('body-parser');
//allows for Cross Origin Requests
const cors = require('cors');
// Import our controller object and all of its functions
const taskCtrl = require('./controller/tasksController');
// Specify the port we will listen on
const port = 4000;

///////////////////////
///create our server///
///////////////////////
const app = new express();

//////////////////////
///apply Middleware///
//////////////////////
app.use(cors());
app.use(bodyParser.json());

///////////////
///endpoints///
///////////////
// post for creating
app.post('/api/task', taskCtrl.create);
// get for reading
app.get('/api/tasks', taskCtrl.read);
// put for updating
app.put('/api/task/:id', taskCtrl.update);
app.put('/api/complete/:id', taskCtrl.complete);
// delete for deleting
app.delete('/api/task/:id', taskCtrl.delete);

/////////////////////////////////////////
///make the server listen for requests///
/////////////////////////////////////////
app.listen(port, ()=>{
    console.log(`I'm on ${port}`)
})