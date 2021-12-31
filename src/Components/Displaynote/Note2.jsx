import React from 'react'
import Userservice from '../../Service/Userservice';
import Icons from '../Icons/Icons'
import Iconsupdate from '../Iconsupdate/Iconsupdate';
import Modal from '@mui/material/Modal';
import Button from "@mui/material/Button";
import './Note2.css'

const userservice = new Userservice();

function Note2({notes,listenToColor}) {

    const[color,setColor]=React.useState(" ");
    const[update,setUpdate]=React.useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [titleUpdate, settitleUpdate] = React.useState(notes.title);
    const [descriptionUpdate, setdescriptionUpdate] = React.useState( notes.description);


    const handleNoteColor = (color, id) => {
        setColor(color);
        const obj = {
          noteIdList: [id],
          color: color,
        };
    
        userservice.changeColor( "http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes", obj )
          .then(() => {
            setColor(color);
            setUpdate();
            listenToColor();
          })
          .catch((err) => {
            console.log(err);
          });
      };
      const takeTitle = (e) => {
        settitleUpdate(e.target.value);
      };
    
      const takeDescription = (e) => {
        setdescriptionUpdate(e.target.value);
      };
      const takeUpdateNote = (noteid) => {
        console.log("take update note");
        
        const obj = {
          noteId:noteid,
          title: titleUpdate,
          description:descriptionUpdate,
        };
        userservice.updateNotes(
            "http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",obj
          )
          .then(() => {
            setUpdate(update);
            setOpen(false);
            
          })
          .catch((err) => {
            console.log(err);
          });
          
    }

    return (
        <div className="container"style={{ backgroundColor: notes.color }}>
            <div className="title" onClick={handleOpen}>{notes.title}</div>
            <div className="description" onClick={handleOpen}>{notes.description}</div>
            <div className="icons" > <Iconsupdate  handleNoteColor={handleNoteColor}
                    noteId={notes.id}/></div>
 <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <div className="Modal-box">
      <input className="text1"defaultValue={notes.title} onChange={takeTitle}></input>
          <input
            className="text2"defaultValue={notes.description}
            onChange={takeDescription}
          ></input>
          <div className="bottom">
            <Iconsupdate />
            <Button onClick={()=>takeUpdateNote(notes.id)}>close</Button>
          </div>
         </div>
      </Modal>
        </div>
      
    );
}

export default Note2;