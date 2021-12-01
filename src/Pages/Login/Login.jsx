import React, { Component } from 'react'
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class Login extends Component {
    render() {
        return (
            <div class="Login-container">
                <div class="logo"> Fundoo
                </div>
                <h1 class="header">Sign in</h1>
                <span class="text">Use your Fundoo account</span>
                <formfield>
                    <TextField fullWidth label="Email or phone" id="emailorPhone" size="medium" margin="normal" sx={{marginTop:'40px'}}/>
                    <p class="text1">Forgot email?</p>
                    <TextField fullWidth label="Enter Password" id="password" size="medium" margin="normal" sx={{marginTop:'40px'}}/>
                    <div class="text2">
                        Not your computer? Use Guest mode to sign in privately.
                        <a href="">Learn more</a>
                    </div>
                    <div class="buttons">
                            <Button>Create account</Button>
                            <Button variant="contained">Next</Button>
                    </div>
                </formfield>
                
            </div>
        )
    }
}

export default Login