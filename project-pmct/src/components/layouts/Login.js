import React from 'react';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            password:"",
        };
        this.onChange=this.onChange.bind(this);
    }
    onChange(event){
        if (event.target.name === 'name') {
            this.setState({name:event.target.value});
        } else if (event.target.name === 'password') {
            this.setState({password:event.target.value});
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
                                <h5 className="display-4 text-center">User Login Form</h5>
                                <hr></hr>
                                <form>
                                        <div className="form-group">
                                             <input type="text" name="name" value={this.state.name}
                                             className="form-control form-control-lg" onChange={this.onChange}
                                             placeholder="User Name"></input>

                                        </div>
                                       
                                        <div className="form-group">
                                             <input type="text" value={this.state.password} onChange={this.onChange}  name="password" className="form-control form-control-lg" placeholder="Password"></input>
                                        </div>
                                        <input type="button" onClick={(event)=>this.handleClick(event.state)} className="btn btn-primary btn-black form-control-lg" name="login" value="Login" />
                                       
                                </form>
                            </div>
                        </div>
                  </div>
                </div>
            

        );
    }
}

export default Login;
