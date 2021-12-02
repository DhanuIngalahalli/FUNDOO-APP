import React, { Component } from 'react'
import './Forget.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class Forget extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            emailorphone: "",
            emailorphoneerror: false,
        };
      }
      validation = () => {
        let isError = false;
        const error = this.state;
        error.emailorphoneerror = this.state.emailorphone === "" ? true : false;
        this.setState({   
          ...error,
        });
        isError = error.emailorphone ;
        return isError;
      };
      next = () => {
        var isValid = this.validation();
        if (!isValid) {
          console.log("successful validation");
        }
      };
      changeHandle =(e)=>{
        this.setState({  
          [e.target.name]: e.target.value 
        })
    }
    render() {
        return (
            <div class="forget-email-body">
            <div class="logo"> Fundoo
            </div>
            <h1 class="email-header">Find your email</h1>
            <span class="email-text">Enter your phone number or recovery email</span>
            <form>
                <TextField fullWidth label="Phone number or email" id="emailorphone" size="medium" margin="normal" error={this.state.emailorphoneerror} helperText={this.state.emailorphoneerror ? "Enter Email or Phone" : ''} onChange={e=> this.changeHandle(e)} sx={{marginTop:'40px'}}/>
                <div class="button">
                <Button variant="contained" onClick={this.next}>Next</Button>
                </div>
            </form>
        </div>
        )
    }
}

export default Forget