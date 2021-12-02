import React, { Component } from 'react'
import './Reset.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class Reset extends Component {
    render() {
        return (
            <div class="Reset-password-body">
            <div class="logo"> Fundoo</div>
            <h1 class="Password-header">Reset password</h1>
            <span class="password-text">We'll never share your password with anyone else</span>
            <form>
                <TextField fullWidth label="new password" id="password" size="medium" margin="dense" sx={{marginTop:'40px'}}/>
                <TextField fullWidth label="confirm password" id="password" size="medium" margin="dense" sx={{marginTop:'40px'}}/>
                <div class="button">
                        <Button variant="contained"> Next </Button>
                </div>
            </form>
        </div>
        )
    }
}

export default Reset