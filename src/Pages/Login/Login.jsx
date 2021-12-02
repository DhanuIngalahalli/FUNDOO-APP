import React, { Component } from 'react'
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    };
  }
    changeHandle =(e)=>{
    this.setState({
      [e.target.name]: e.target.value 
    })
}
    render() {
        console.log(this.state)
        return (
            <div class="Login-container">
                <div class="logo"> Fundoo
                </div>
                <h1 class="header">Sign in</h1>
                <span class="text">Use your Fundoo account</span>
                <formfield>
                    <TextField fullWidth label="Email or phone" id="emailorphone" size="medium" margin="normal" error={this.state.emailorphoneerror} helperText={this.state.emailorphoneerror ? "Enter Email or Phone" : ''} onChange={e=> this.changeHandle(e)} sx={{marginTop:'40px'}} />
                    <p class="text1">Forgot email?</p>
                    <TextField fullWidth label="Enter Password" id="password" size="medium" margin="normal" error={this.state.passworderror} helperText={this.state.passworderror ? "Enter Password" : ''} onChange={e=> this.changeHandle(e)} sx={{marginTop:'40px'}}/>
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