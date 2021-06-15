import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
class Signin extends Component{
    constructor(){
        super()
        this.state={
            emailId:"",
            emailIdError:"",
            password:"",
            passwordError:""

        }
    }
    emailIdChange=(e)=>{
        this.setState({
            emailId:e.target.value
        })
        this.validateemailId(e)
    }
    passwordChange=(e)=>{
        this.setState({
            password:e.target.value
        })
        this.validatepassword(e)
    }
    validateemailId=(e)=>{
        if(e.target.value==""){
            this.setState({
                emailIdError:"emailid  is required"
            })
        }
        else{
            this.setState({
                emailIdError:""
            })
        }

    }
    validatepassword=(e)=>{
        if(e.target.value==""){
            this.setState({
                passwordError:"password is required"
            })

        }
        else{
            this.setState({
                passwordError:""
            })
        }

    }
    register=()=>{
        console.log(this.state);
    }
    render(){
        return(<div>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control input type="text" value={this.state.emailId} placeholder="enter your emailId" onBlur={this.validateemailId} onChange={this.emailIdChange} />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control input type="text" value={this.state.password} placeholder="enter your password" onBlur={this.validatepassword} onChange={this.passwordChange} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
  <Button type="button" onClick={this.register}>Register
    Submit
  </Button >
  </Form.Group>

</Form>
           
            New user ? please<Link to="/Signup">Signup</Link>
        </div>)
    }
    
}
export default Signin