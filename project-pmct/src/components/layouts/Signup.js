import React from 'react';

class Signup extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            emailId:"",
            password:"",
        };
        this.onChange=this.onChange.bind(this);
       // this.handleSubmit=this.handleSubmit.bind(this);
    }
    onChange(event){
        if (event.target.name === 'name') {
            this.setState({name:event.target.value});
        } else if (event.target.name === 'emailId') {
            this.setState({emailId:event.target.value});

        } else if (event.target.name === 'password') {
            this.setState({password:event.target.value});
        }
         event.preventDefault();
    }

    handleClick(event){
        console.log(this.state.name,this.state.emailId,this.state.password);
        fetch('http://localhost:3001/submit-signup-data', { mode: 'no-cors' ,
            method: 'POST',
            headers:{"Access-Control-Allow-Origin" : '*',
            "Content-Type":'application/x-www-form-urlencoded'},
            body:{name:this.state.name,emailId:this.state.emailId,password:this.state.password}
        });
    
    }

    render(){
        return (
                <div className="project">
                  <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">User Sign Up Form</h5>
                                <hr></hr>
                                <form>
                                        <div className="form-group">
                                             <input type="text" name="name" value={this.state.name}
                                             className="form-control form-control-lg" onChange={this.onChange}
                                             placeholder="Name"></input>

                                        </div>
                                        <div className="form-group">
                                             <input type="text" value={this.state.emailId} onChange={this.onChange} name="emailId" className="form-control form-control-lg" placeholder="Email Id"></input>
                                        </div>
                                        
                                        <div className="form-group">
                                             <input type="text" value={this.state.password} onChange={this.onChange}  name="password" className="form-control form-control-lg" placeholder="Password"></input>
                                        </div>
                                        <input type="button" onClick={(event)=>this.handleClick(event.state)} className="btn btn-primary btn-black mt-4" name="signup" value="Sign Up" />
                                       
                                </form>
                            </div>
                        </div>
                  </div>
                </div>
            

        );
    }
}

export default Signup;
