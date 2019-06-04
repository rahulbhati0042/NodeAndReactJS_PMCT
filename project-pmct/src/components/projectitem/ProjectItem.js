import React from 'react';

class ProjectItem extends React.Component{
    
    handleClick = record_id =>{
        fetch('http://localhost:3001/delete-project/'+record_id, {method: 'DELETE'}).
        then(function(response) {
            window.location.reload();
            return response;
        }).then(data =>
            this.forceUpdate()
            ).catch(error => this.setState({ error, isLoading: false }));

}

    render(props){
        return (
                <div className="container">
                  <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">{this.props.project.scrum_master}</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>{this.props.project.name}</h3>
                            <p>{this.props.project.description}</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                               <a href="#">
                                    <li className="list-group-item board">
                                      <i className="fa fa-flag pr-1">Project Board</i>
                                    </li>
                               </a>
                               <a href={'/updateProject/'+this.props.project.record_id}>
                                    <li className="list-group-item update">
                                      <i className="fa fa-edit pr-1">Update Project Info</i>
                                    </li>
                               </a>
                               <a href="#" onClick={() => { this.handleClick(this.props.project.record_id) }} >
                                    <li className="list-group-item delete">
                                      <i className="fa fa-minus-circle pr-1">Delete Project Info</i>
                                    </li>
                               </a>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            

        );
    }
}

export default ProjectItem;
