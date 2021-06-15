import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Signup extends Component{
    constructor(){
        super()
    
        this.state={
        UserName:"",
        MobileNumber:"",
        EmailId:"",
        Password:"",
        ConfirmPassword:"",
        UserNameError:"",
        MobileNumberError:"",
        EmailIdError:"",
        PasswordError:"",
        ConfirmPasswordError:""
        }
    }
    inputChange1=(e)=>{
        this.setState({
            UserName:e.target.value
        })  
        this.validateUserName(e)  
    }
    inputChange2=(e)=>{
        this.setState({
            MobileNumber:e.target.value
        })
        this.validateMobileNumber(e)

    }
    inputChange3=(e)=>{
        this.setState({
            EmailId:e.target.value
        })
        this.validateEmailId(e)
    }
    inputChange4=(e)=>{
        this.setState({
            Password:e.target.value
        })
        this.validatePassword(e)
    }
    inputChange5=(e)=>{
        this.setState({
            ConfirmPassword:e.target.value
        })
        this.validateConfirmPassword(e)
    }
    register=()=>{
        console.log(this.state)
        
        
    }
    
    validateUserName=(e)=>{
        if(e.target.value==""){
            this.setState({
                UserNameError:"UserName is required"
            })
        }
        else if(e.target.value.length<3){
            this.setState({
                UserNameError:"user name contain atleast 3 characters"
            })
        }
        else{
            this.setState({
                UserNameError:""
            })
        }
    }
    validateMobileNumber=(e)=>{
        if(e.target.value==""){
            this.setState({
                MobileNumberError:"MobileNumber is required"
            })
        }
        else if(e.target.value.length!=10){
            this.setState({
                MobileNumberError:"Mobile number contain 10 digits"
            })
        }
        
        else{
            this.setState({
                MobileNumberError:""
            })
        }

    }
    validateEmailId=(e)=>{
        if(e.target.value==""){
            this.setState({
                EmailIdError:"emailid  is required"
            })
        }
        else{
            this.setState({
                EmailIdError:""
            })
        }

    }
    validatePassword=(e)=>{
        if(e.target.value==""){
            this.setState({
                PasswordError:"password is required"
            })
        }
        else{
            this.setState({
                PasswordError:""
            })
        }

    }
    validateConfirmPassword=(e)=>{
        if(e.target.value==""){
            this.setState({
                ConfirmPasswordError:"ConfirmPassword is required"
            })
        }
        else if(e.target.value!=this.state.ConfirmPassword){
            this.setState({
                ConfirmPasswordError:"Confirm password doesn't match"
            })
        }
        else{
            this.setState({
                ConfirmPasswordError:""
            })
        }

    }
    render(){

        return(<div>
            <form>
            <div>
                <label>UserName</label>
                <input type="text" value={this.state.UserName} placeholder="enter user name" onChange={this.inputChange1} onBlur={this.validateUserName} />
            {this.state.UserNameError}
            </div>
            <div>
                <label>Mobile_number</label>
                <input type= "number" value={this.state.MobileNumber} placeholder="Enter your mobile number" onChange={this.inputChange2} onBlur={this.validateMobileNumber}/>
            {this.state.MobileNumberError}
            </div>
            <div>
                <label>Email_id</label>
            <input type="email" value={this.state.EmailId} placeholder="enter your email_id" onChange={this.inputChange3} onBlur={this.validateEmailId}/>
            {this.state.EmailIdError} 
            </div>
            <div>
                <label>password</label>
                <input type="text" value={this.state.Password} placeholder="enter your password" onChange={this.inputChange4} onBlur={this.validatePassword}/>
            {this.state.PasswordError}
            </div>
        
            <div>
                <label>Confirm password</label>
                <input type="text" value={this.state.ConfirmPassword} placeholder="enter your confirm" onChange={this.inputChange5} onBlur={this.validateConfirmPassword}/>
            {this.state.ConfirmPasswordError}
            </div>
           
            <br/>
            <button type="button" onClick={this.register}>Register</button>
            <button type="reset">cancel</button>
            
        </form>
                already register ? please<Link to="/Signin">Signin</Link>
        </div>)
    }
}
export default Signup