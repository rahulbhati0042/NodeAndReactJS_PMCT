import React from 'react';
import {Link} from 'react-router-dom';
class CreateProjectButton extends React.Component{
    render(){
        return (
            <React.Fragment>
                 <Link to="/dashboard" className="btn btn-lg btn-info" >
                    Home
                    </Link> &nbsp;&nbsp;
                    <Link to="/addProject" className="btn btn-lg btn-info" >
                    Create a Project
                    </Link>
                    
            </React.Fragment>                   

        );
    }
}

export default CreateProjectButton;
