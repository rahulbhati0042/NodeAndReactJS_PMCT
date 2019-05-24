import React from 'react';
import logo from './logo.svg';

import Dashboard from './components/Dashboard';
import Header from './components/layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
import AddProject from './components/projectitem/AddProject';
import Signup from './components/layouts/Signup';
import Login from './components/layouts/Login';
var mydb= require('mysql');

var connection= mydb.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb",
    port:"3007",
    socketPath:"/path/to/socket"
});
//con.connect();
connection.connect();


console.log(connection);

function App() {
  return (
    <Router>
          <div className="App">
              <Header/>
            </div>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/addProject" component={AddProject} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
    </Router>
    
  );
}

export default App;
