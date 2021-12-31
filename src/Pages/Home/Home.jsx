import { drawerClasses } from '@mui/material';
import React from 'react'
import Displaynote from '../../Components/Displaynote/Displaynote'
import Note2 from '../../Components/Displaynote/Note2';
import Takenote from '../../Components/Takenote/Takenote';
import MiniDrawer from '../../Components/Navbar/Drawer';



export default function Home({opennav}) {
  
  const[update,setUpdate] = React.useState(true)
  const[color,setColor] = React.useState(" ")
  const[typeOfNote,settypeOfNote] =React.useState("Notes") 
  
  
  const listenToTakeNote=(data) =>{
      console.log(data);
      setUpdate(!update);
      setColor(!color)
      
  }
  
  const changeToUpdatedNote=(data)=>{
  
  console.log(data);
  settypeOfNote(data);
  
  }
    

  return (
        <div>
           <Takenote  listenToTakeNote={listenToTakeNote}/>
           <Displaynote typeOfNote={typeOfNote} update={update} color={color}/> 
           <MiniDrawer changeToUpdatedNote={changeToUpdatedNote} opennav={opennav}/>    
       </div>
    )
}