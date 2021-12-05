import React, { Component } from 'react'
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Userservice from '../../Service/Userservice'
let userservice = new Userservice();


export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailorphone: "",
            password: "",
            emailorphoneerror: false,
            passworderror: false,
        };
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.emailorphoneerror = this.state.emailorphone === "" ? true : false;
        error.passworderror = this.state.password === "" ? true : false;
        this.setState({
             ...error,
        });
       isError = error.emailorphoneerror || error.passworderror;
       return isError;
  };
    next = () => {
       var isValid = this.validation();
       if (!isValid) {
       console.log("successful validation");
       let data = {
                "email":this.state.emailorphone,
                "password":this.state.password,
       }
       userservice.Login("http://fundoonotes.incubation.bridgelabz.com/api/user/login",data)
       .then(()=>{
           console.log("successfull login");
       })
       .catch((err)=>{
           console.log(err);
       });
}
};
  changeHandle =(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
 }
    render() {
        console.log(this.state)
        return (
            <div class="Login-container">
                <div class="logo">
                        <span style={{color:'rgb(17,142,226'}}>F</span>
                        <span style={{color:'rgb(234,67,53'}}>U</span>
                        <span style={{color:'rgb(251,188,5'}}>N</span>
                        <span style={{color:'rgb(17,142,226'}}>D</span>
                        <span style={{color:'rgb(251,188,5'}}>O</span>
                        <span style={{color:'rgb(251,188,5'}}>O</span>
                </div>
                <h1 class="header">Sign in</h1>
                <span class="text">Use your Fundoo account</span>
                <formfield>
                    <TextField fullWidth label="Email or phone" name="emailorphone" size="medium" margin="normal" error={this.state.emailorphoneerror} helperText={this.state.emailorphoneerror ? "Enter Email or Phone" : ''} onChange={e=> this.changeHandle(e)} sx={{marginTop:'40px'}} />
                    <p class="text1">Forgot email?</p>
                    <TextField fullWidth label="Enter Password" name="password" size="medium" margin="normal" error={this.state.passworderror} helperText={this.state.passworderror ? "Enter Password" : ''} onChange={e=> this.changeHandle(e)} sx={{marginTop:'40px'}}/>
                    <div class="text2">
                        Not your computer? Use Guest mode to sign in privately.
                        <a href="">Learn more</a>
                    </div>
                    <div class="buttons">
                            <Button>Create account</Button>
                            <Button variant="contained" onClick={this.next}>Next</Button>
                    </div>
                </formfield>
                
            </div>
        )
    }
}

export default Login