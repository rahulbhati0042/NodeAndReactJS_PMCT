import React from 'react';
import logo from './logo.svg';

import Dashboard from './components/Dashboard';
import Header from './components/layouts/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
import AddProject from './components/projectitem/AddProject';
import UpdateProject from './components/projectitem/UpdateProject';
import Signup from './components/layouts/Signup';
import Login from './components/layouts/Login';

function App() {
  return (
    
    <Router>
          <div className="App">
              <Header/>
            </div>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/addProject" component={AddProject} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/updateProject/:record_id" component={UpdateProject} />
    </Router>
    
  );
}

export default App;
