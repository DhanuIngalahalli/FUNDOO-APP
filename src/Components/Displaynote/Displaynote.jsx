import { Notes } from '@mui/icons-material';
import React from 'react'
import Userservice from '../../Service/Userservice';
import Note2 from './Note2';
import Icons from '../Icons/Icons';
import './Displaynote.css'
const userservice = new Userservice();

export default function Displaynote({update,color,takeUpdateNote,typeOfNote}) {
    const [notes, setNotes] = React.useState([]);
    const getAllNotes=(typeOfNote)=>{ 
    
    userservice.displayNotes( "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList")
  .then((res) => {
    console.log(res.data.data.data);
    let arr=res.data.data.data;
    let filterArray;
    console.log();
     if (typeOfNote== "Notes"){
     filterArray=arr.filter(note => note.isArchived !== true && note.isDeleted !== true)
     } else if (typeOfNote=="Archive") 
     {  filterArray=arr.filter(note => note.isArchived === true && note.isDeleted !== true)}
      else if (typeOfNote=="Trash") 
     {  filterArray=arr.filter(note =>note.isArchived !== true && note.isDeleted === true)
     }
    
    

    setNotes(filterArray);
  })

  .catch((err) => {
    console.log(err);
  });

}
  React.useEffect(() => {
   
getAllNotes(typeOfNote);

  }, [update,color,typeOfNote]);

const listenToColor=()=>{
  getAllNotes("Notes");
  console.log("color updated");
}
   return (
        <div>
             <div className="notes"> 
                
        {
          
       notes.map( notes => (
      <Note2 notes= {notes} listenToColor={listenToColor} takeUpdateNote={takeUpdateNote}></Note2>
       ))
        }  
       </div>
       </div>
          
           
       
    );
}