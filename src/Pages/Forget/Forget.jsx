import React, { Component } from 'react'
import './Forget.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Userservice from '../../Service/Userservice'
import {BrowserRouter,Route} from 'react-router-dom';
let userservice = new Userservice();

export class Forget extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            emailorPhone: " ",
            emailorPhoneerror: false,
        };
      }
    
      validation = () => {
        let isError = false;
        const error = this.state;
        error.emailorPhoneerror = this.state.emailorPhone === " " ? true : false;
        this.setState({   //setState method is used for updating the value
          ...error,
        });
        isError = error.emailorPhoneerror;
        return isError;
      };
    
      next = () => {
        var isValid = this.validation();
        if (!isValid) {
          console.log("successsss validation");
          let data = {
            "email" : this.state.emailorPhone,
        };
        userservice.Forget("http://fundoonotes.incubation.bridgelabz.com/api/user/reset", data)
            .then(()=>{
                console.log("Reset mail sent successfully");
            })
            .catch ((err)=> {
                console.log(err);
            });
    }
}
    
      changeHandle =(e)=>{
          this.setState({  
            [e.target.name]: e.target.value 
          })
      }
    render() {
        return (
            <div class="forget-email-body">
            <div class="logo"> 
                 <span style={{color:'rgb(17,142,226'}}>F</span>
                 <span style={{color:'rgb(234,67,53'}}>U</span>
                 <span style={{color:'rgb(251,188,5'}}>N</span>
                 <span style={{color:'rgb(17,142,226'}}>D</span>
                 <span style={{color:'rgb(251,188,5'}}>O</span>
                 <span style={{color:'rgb(251,188,5'}}>O</span>
                 </div>
            <h1 class="email-header">Find your email</h1>
            <span class="email-text">Enter your phone number or recovery email</span>
            <form>
                <TextField fullWidth label="Phone number or email" name="emailorPhone" size="medium" margin="normal" sx={{marginTop:'40px'}}/>
                <div class="button">
                <Route>
                            <Button onClick={()=>{"/Forget"}}></Button>
                           <Button variant="contained" onClick={this.next}>Next</Button>
                </Route>
                </div>
            </form>
        </div>
        )
    }
}

export default Forget