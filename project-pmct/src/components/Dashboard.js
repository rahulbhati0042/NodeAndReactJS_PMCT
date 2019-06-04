import React from 'react';
import ProjectItem from './projectitem/ProjectItem';
import Header from './layouts/Header';
import {Link} from 'react-router-dom'
import CreateProjectButton from './projectitem/CreateProjectButton';
class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {projectList: []};
      }
      
      componentDidMount(){
        fetch('http://localhost:3001/get-project-list')
        .then(response => response.json())
        .then(data =>
            this.setState({
                projectList: data,
              isLoading: false,
            })
          ).catch(error => this.setState({ error, isLoading: false }));
      }
    render(){
        const { projectList, isLoading, error } = this.state;
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
                               {projectList.map((pro,i) =>
                                <ProjectItem key={pro.record_id} project={pro}/>
                                )}
                            </div>
                        </div>
                    </div>
                
        );
    }
}

export default Dashboard;
