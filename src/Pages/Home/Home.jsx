import { drawerClasses } from '@mui/material';
import React from 'react'
import Displaynote from '../../Components/Displaynote/Displaynote'
import Note2 from '../../Components/Displaynote/Note2';
import Takenote from '../../Components/Takenote/Takenote';
import MiniDrawer from '../../Components/Navbar/Drawer';
import Userservice from '../../Service/Userservice';


const userservice = new Userservice();

export default function Home({opennav}) {
  
 const [Notearr, setNotearr] = React.useState([]);
    

 React.useEffect(() => {
        displayNotes()
        }, [])


    const displayNotes = () => {
   
        userservice.displayNotes("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList")
            .then((res)=>{
               // console.log(res.data.data.data);
             setNotearr([res.data.data.data])
            
            })
            .catch ((err)=> {
                console.log(err);
            });
    }


    return (
        <div>
           <Takenote />
           <Displaynote/> 
           <MiniDrawer opennav={opennav}/>    
       </div>
    )
}