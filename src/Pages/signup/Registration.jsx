import React, { Component } from 'react'
import './Registration.css';
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


export class Registration extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          firstName: "",
          lastName: "",
          userName:"",
          password:"",
          confirm:"",
          firsterror: false,
          lasterror: false,
          userNameerror: false,
          passworderror: false,
          confirmpwderror: false,
        };
      }
    
      validation = () => {
        let isError = false;
        const error = this.state;
        error.firsterror = this.state.firstName === "" ? true : false;
        error.lasterror = this.state.lastName === "" ? true : false;
        error.userNameerror = this.state.userName === "" ? true : false;
        error.passworderror = this.state.password === "" ? true : false;
        error.confirmpwderror = this.state.confirm === "" ? true : false;
        this.setState({
          ...error,
        });
        isError = error.firsterror || error.lasterror ||  error.userNameerror || error.passworderror || error.confirmpwderror ;
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
                 <div class="Outer-Frame">
                    <div class="Left-side">
                        <div class="Left-side-header">
                            Fundoo
                         </div>
                        <div class="section-first">
                            <div class="section-first-header">Create your Fundoo Account</div>
                            <div id="Reg form">
                        <div class="name">
                            <TextField  label="first name" id="firstName" size="small" margin="normal"error={this.state.firsterror} helperText={this.state.firsterror ? "enter First name" : ''} onChange={e=> this.changeHandle(e)} sx={{marginRight:"5px"}} />
                            <TextField  label="last name" id="lastName" size="small" margin="normal"error={this.state.lasterror} helperText={this.state.lasterror ? "enter Last name" : ''} onChange={e=> this.changeHandle(e)} sx={{marginLeft:"5px"}}/>
                        </div>
                        <TextField fullWidth label="user name"  id="userName" size="small" margin="normal" error={this.state.userNameerror} helperText={this.state.userNameerror ? "enter Username" : 'you can use numbers,letters and periods'} onChange={e=> this.changeHandle(e)} />
                        <div><p class="text">Use my current email address instead</p></div>
                        <div class="password">
                            <TextField label="password" id="password" size="small" margin="normal" error={this.state.passworderror} helperText={this.state.passworderror ? "enter Password" : ''} onChange={e=> this.changeHandle(e)}sx={{marginRight:"5px"}} />
                            <TextField label="confirm" id="passwordconfirm" size="small" margin="normal"error={this.state.confirmpwderror} helperText={this.state.confirmpwderror ? "Re-enter password" : ''} onChange={e=> this.changeHandle(e)} sx={{marginLeft:"5px"}}/>
                        </div>
                        <p class="pwdpattern">Use 8 or more characters with a mix of letters, numbers and symbols</p>
                        <div class="check">
                            <Checkbox/> Show password
                        </div>
                       <div class="buttons">
                            <Button>Sign in instead</Button>
                            <Button variant="contained" onClick={this.next}>Next</Button>
                        </div>
                        </div>
                    </div>
                </div>
                    <div class="Right-side">
                    <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" height="244" width="244"/>
                    <div class="right-content-caption">
                        <span>One account. All of Fundoo</span><br/>
                        <span>working for you.</span>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default Registration