import React from "react";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import IconButton from "@mui/material/IconButton";
import SimplePopperUpdate from "../Colorospopperupdate/Colorspopperupdate";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Userservice from '../../Service/Userservice';
const userservice = new Userservice();

export default function Iconsupdate({ handleNoteColor, noteId }) {
  const takeANote =()=>{
    let obj ={
     isArchived:true,
     noteIdList:[noteId],
    };
    userservice.addArchive("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",obj)
    .then((res) => {
      console.log("response",res);
    })
    .catch((err) => {
      console.log(err);
    });
    
 };
 const takeTrashNote = () => {
  let obj = {
    isDeleted: true,
    noteIdList: [noteId],
  };
  userservice
    .trashNotes(
      "http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",
      obj
    )
    .then((res) => {
      console.log("Deleted note", res);
    })
    .catch((err) => {
      console.log(err);
    });
};
  return (
    <div class="icons">
      <IconButton> <AddAlertOutlinedIcon /> </IconButton>
      <IconButton> <PersonAddAlt1OutlinedIcon /> </IconButton>
      <IconButton><SimplePopperUpdate handleNoteColor={handleNoteColor} noteId={noteId} /></IconButton>
      <IconButton><ImageOutlinedIcon /> </IconButton>
      <IconButton> <ArchiveOutlinedIcon onClick={takeANote} /></IconButton>
      <IconButton><DeleteOutlineOutlinedIcon onClick={takeTrashNote} /></IconButton>
      <IconButton> <MoreVertOutlinedIcon /></IconButton>
    </div>
  );
}