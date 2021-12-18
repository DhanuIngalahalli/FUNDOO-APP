import { Notes } from '@mui/icons-material';
import React from 'react'
import Userservice from '../../Service/Userservice';
import Note2 from './Note2';
import Icons from '../Icons/Icons';
import './Displaynote.css'
const userservice = new Userservice();

export default function Displaynote() {
    const[title,setTitle]=React.useState()
   const[notes,setNotes]=React.useState([])

    React.useEffect(()=>{
        
        userservice.displayNotes("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList")
        .then((res)=>{
            console.log(res.data.data.data);
          setNotes(res.data.data.data)
        
        })
        .catch ((err)=> {
            console.log(err);
        });
 


    },[])
    
   return (
        <div>
             <div className="notes"> 
                
        {
          
       notes.map( notes => 
      <Note2 notes= {notes}></Note2>
       )
        }  
       </div>
       </div>
          
           
       
    )
}