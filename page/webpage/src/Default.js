import { Component } from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Signin from "./Signin"
import Signup from "./Signup";

class Default extends Component{
    render(){
        return(<div>
            <BrowserRouter> 
                <Route path="/Signin" component={Signin}></Route>
                <Route path="/Signup" component={Signup}></Route>
            </BrowserRouter>
        </div>
        )
    }
}
export default Default