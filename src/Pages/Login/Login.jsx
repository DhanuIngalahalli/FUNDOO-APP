import React, { Component } from 'react'
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Userservice from '../../Service/Userservice';
const userservice = new Userservice();

export class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            emailorPhone: " ",
            password:" ",
            emailorPhoneerror: false,
            passworderror: false,
        };
      }
    
      validation = () => {
        let isError = false;
        const error = this.state;
        error.emailorPhoneerror = this.state.emailorPhone === " " ? true : false;
        error.passworderror = this.state.password === " " ? true : false;
        this.setState({   //setState method is used for updating the value
          ...error,
        });
        isError = error.emailorPhoneerror || error.passworderror ;
        // isError = error.password ;
        return isError;
      };
    
      next = () => {
        var isValid = this.validation();
         console.log("successfull validation",isValid)
        if (!isValid) {
          console.log("successfull validation");
          let data = {
            "email" : this.state.emailorPhone,
            "password": this.state.password
        };
        userservice.Login("http://fundoonotes.incubation.bridgelabz.com/api/user/login", data)
            .then((success)=>{
                console.log(success);
                console.log("sucessfully logged in");
                localStorage.setItem("token",success.data.id)
            })
            .catch ((err)=> {
                console.log(err);
            });
        
        }
      }
    
      changeHandle =(e)=>{
          this.setState({  //setState method is used for updating the value
            [e.target.name]: e.target.value 
          })
      }

    render() {
        return (
            <div class="Login-frame">
                <div class="logo">
                <span style={{color:'rgb(17, 142, 226)'}}>F</span>
                <span style={{color:'rgb(234, 67, 53)'}}>u</span>
                <span style={{color:'rgb(251, 188, 5)'}}>n</span>
                <span style={{color:'rgb(17, 142, 226)'}}>d</span>
                <span style={{color:'rgb(234, 67, 53)'}}>o</span>
                </div>
                <h1 class="header">Sign in</h1>
                <span class="text">Use your Fundo account</span>
                <form>
                    <TextField fullWidth label="Email or Phone" name="emailorPhone" size="medium" margin="dense" error={this.state.emailorPhoneerror} helperText={this.state.emailorPhoneerror ? "Enter Email or Phone" : ' '} onChange={e=> this.changeHandle(e)} sx={{marginTop:'20px'}}/>
                    <p class="text1" >Forgot email?</p>
                    <TextField fullWidth label="Enter Password" name="password" size="medium" margin="dense" error={this.state.passworderror} helperText={this.state.passworderror ? "Enter Password" : ' '} onChange={e=> this.changeHandle(e)} sx={{marginTop:'20px'}}/>
                    <div class="text2">
                        Not your computer? Use Guest mode to sign in privately.
                        <a href=" ">Learn more</a>
                    </div>
                    <div class="buttons">
                            <Button>Create account</Button>
                            <Button variant="contained"  onClick={this.next}>Next</Button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Login