import React, { Component } from 'react'
import './Reset.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Userservice from '../../Service/Userservice'
let userservice = new Userservice();

export class Reset extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            newpassword:"",
            confirmPwd:"",
            passworderror:false,
            confirmPwderror:false,
        };
      }
      validation = () => {
        let isError = false;
        const error = this.state;
        error.newpassworderror = this.state.newpassword === "" ? true : false;
        error.confirmPwderror = this.state.confirmPwd === "" ? true : false;
        this.setState({   
          ...error,
        });
        isError = error.newpassword ;
        isError = error.confirmPwderror;
        return isError;
      };
      next = () => {
        var isValid = this.validation();
        if (!isValid) {
          console.log("successful validation");
          let data = {
            "newpassword":this.state.newpassword ,
            "confirmpassword":this.state.confirmPwd,
            }
           userservice.Reset("http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password",data)
          .then(()=>{
              console.log("successfull reset");
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
        return (
            <div class="Reset-password-body">
            <div class="logo">
                        <span style={{color:'rgb(17,142,226'}}>F</span>
                        <span style={{color:'rgb(234,67,53'}}>U</span>
                        <span style={{color:'rgb(251,188,5'}}>N</span>
                        <span style={{color:'rgb(17,142,226'}}>D</span>
                        <span style={{color:'rgb(234,67,53'}}>o</span>
                        <span style={{color:'rgb(234,67,53'}}>o</span>
            </div>
            <h1 class="Password-header">Reset password</h1>
            <span class="password-text">We'll never share your password with anyone else</span>
            <form>
                <TextField fullWidth label="new password" id="password" size="medium" margin="dense"error={this.state.newpassworderror} helperText={this.state.newpassworderror ? "Enter Password" : ''} onChange={e=> this.changeHandle(e)}  sx={{marginTop:'40px'}}/>
                <TextField fullWidth label="confirm password" id="password" size="medium" margin="dense"error={this.state.confirmPwderror} helperText={this.state.confirmPwderror ? "Re-enter password" : ''} onChange={e=> this.changeHandle(e)} sx={{marginTop:'40px'}}/>
                <div class="button">
                        <Button variant="contained" onClick={this.next}>Next</Button>
                </div>
            </form>
        </div>
        )
    }
}

export default Reset