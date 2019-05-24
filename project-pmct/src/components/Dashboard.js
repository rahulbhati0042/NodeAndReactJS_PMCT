import React from 'react';
import ProjectItem from './projectitem/ProjectItem';
import Header from './layouts/Header';
import {Link} from 'react-router-dom'
import CreateProjectButton from './projectitem/CreateProjectButton';
class Dashboard extends React.Component{
    render(){
        return (
                <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="display-4 text-center">Projects</h1>
                                <br/>
                               <CreateProjectButton></CreateProjectButton>
                               <br>
                               </br>
                               <hr></hr>
                                <ProjectItem></ProjectItem>
                            </div>
                        </div>
                    </div>
                
        );
    }
}

export default Dashboard;
