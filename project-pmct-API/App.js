var express=require('express');
var cors = require('cors');
var app=express();
var connection = require('./config.js');
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(bodyParser.json());
app.use(cors());
app.get('/',function(req,res){
    res.end("<html><head></head><body>PMCT Server Running...</body></html>");
});

app.post('/submit-signup-data',urlencodedParser,function(req,res){
    var data={name:req.body.name,scrum_master:req.body.scrum_master,description:req.body.description,team_members:req.body.team_members}
    connection.query('INSERT INTO project_details SET ?',data,function(error, results, fields) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(results);
});
});

app.post('/addProject',urlencodedParser,function(req,res){
    var data={name:req.body.name,scrum_master:req.body.scrum_master,description:req.body.description,team_members:req.body.team_members}
    connection.query('INSERT INTO project_details SET ?',data,function(error, results, fields) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(results);
});
});

app.put('/updateProject',urlencodedParser,function(req,res){
    var data=[req.body.name,req.body.scrum_master,req.body.description,req.body.team_members,req.body.record_id];
     console.log(data);
    connection.query('update project_details set name=?,scrum_master=?,description=?,team_members=? WHERE record_id =?',data,function(error, results, fields) {
        if (error) throw res.send(error);
        res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(results);
});
});

app.get('/get-project-list',function(req,res){
    connection.query("SELECT * FROM project_details",function(error, results, fields) {
      if (error) throw res.send(error);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Content-Type', 'application/json');
      res.send(results);
      });
    });

app.delete('/delete-project/:record_id',function(req,res){
    connection.query("delete FROM project_details WHERE record_id =?",[req.params.record_id],function(error, results, fields) {
        if (error) throw res.send(error);
        res.send(results);
    });
});

    app.post('/login', urlencodedParser, function (req, res) {
    console.log(req.body.username);
    res.send('welcome, ' + req.body.username)

  })
  app.get('/getByRecordID/:record_id',function(req,res){
    connection.query("SELECT * FROM project_details WHERE record_id =?",[req.params.record_id],function(error, results, fields) {
        if (error) throw res.send(error);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Content-Type', 'application/json');
        
        res.send(results[0]);
        });
});

app.listen(3001,function(){
    console.log('node server is running on port : 3001...');
});