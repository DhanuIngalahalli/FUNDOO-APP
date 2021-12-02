import React, { Component } from 'react'
import './Forget.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class Forget extends Component {
    render() {
        return (
            <div class="forget-email-body">
            <div class="logo"> Fundoo</div>
            <h1 class="email-header">Find your email</h1>
            <span class="email-text">Enter your phone number or recovery email</span>
            <form>
                <TextField fullWidth label="Phone number or email" id="emailorPhone" size="medium" margin="normal" sx={{marginTop:'40px'}}/>
                <div class="button">
                        <Button variant="contained"> Next </Button>
                </div>
            </form>
        </div>
        )
    }
}

export default Forget