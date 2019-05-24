var mydb= require('mysql');

var con= mydb.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb"
});
con.connect(function(error){
    if(error) throw error;

    console.log("connected...");
});


function add(name,emailId,password){
    var insQuery="insert into user(name,emailId,password) values(name,emailId,password)";
    con.query(insQuery,function(error,results){
        if(error) {
            console.log("error :"+error);
            throw error};

        console.log("Record Inserted successfully");
    });
}

module.exports=con;
