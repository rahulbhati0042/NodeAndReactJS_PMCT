import React from 'react';

class AddProject extends React.Component{

    constructor(props){
        super(props);
        this.state={
            project_name:"",
            unique_project_id:"",
            project_desciption:"",
            start_date:"",
            end_date:"",
        };
        this.onChange=this.onChange.bind(this);
    }
    onChange(event){
        if (event.target.name === 'project_name') {
            this.setState({project_name:event.target.value});
        } else if (event.target.name === 'unique_project_id') {
            this.setState({unique_project_id:event.target.value});

        } else if (event.target.name === 'project_desciption') {
            this.setState({project_desciption:event.target.value});
        }else if (event.target.name === 'start_date') {
            this.setState({start_date:event.target.value});
        }else if (event.target.name === 'end_date') {
            this.setState({end_date:event.target.value});
        }
        
         event.preventDefault();
    }
    handleClick(event){
        console.log(this.state);
    
 
     }

    render(){
        return (
                <div className="project">
                  <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Create Project Form</h5>
                                <hr></hr>
                                <form>
                                        <div className="form-group">
                                             <input type="text" name="project_name" value={this.state.project_name}
                                             className="form-control form-control-lg" onChange={this.onChange}
                                             placeholder="Project Name"></input>

                                        </div>
                                        <div className="form-group">
                                             <input type="text" value={this.state.unique_project_id} onChange={this.onChange} name="unique_project_id" className="form-control form-control-lg" placeholder="Unique Project Id"></input>
                                        </div>
                                        
                                        <div className="form-group">
                                             <input type="text" value={this.state.project_desciption} onChange={this.onChange} name="project_desciption" className="form-control form-control-lg" placeholder="Project Desciption"></input>
                                        </div>
                                        <h6>Start Date</h6>
                                        <div className="form-group">
                                             <input type="date" value={this.state.start_date} onChange={this.onChange}  className="form-control form-control-lg" name="start_date" placeholder="Project Desciption"></input>
                                        </div>
                                        <h6>Estimated Date</h6>
                                        <div className="form-group">
                                             <input type="date" value={this.state.end_date}  onChange={this.onChange} className="form-control form-control-lg" name="end_date" placeholder="Project Desciption"></input>
                                        </div>
                                        <input type="button" onClick={(event)=>this.handleClick(event.state)} className="btn btn-primary btn-black mt-4" name="submit" value="Submit" />
                                       
                                </form>
                            </div>
                        </div>
                  </div>
                </div>
            

        );
    }
}

export default AddProject;
