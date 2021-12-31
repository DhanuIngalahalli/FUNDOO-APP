import React from 'react'
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import IconButton from "@mui/material/IconButton";
import SimplePopper from '../Colorspopper/Colorspopper';

export default function Icons({listenToArchive,handleNoteColor}) {

    return (
        <div class="icons">
            <IconButton><AddAlertOutlinedIcon /> </IconButton>
            <IconButton><PersonAddAlt1OutlinedIcon /></IconButton>
            <IconButton>< SimplePopper handleNoteColor={handleNoteColor}/></IconButton>
            <IconButton><ImageOutlinedIcon /></IconButton>
            <IconButton><ArchiveOutlinedIcon onClick= {()=>listenToArchive(true)} /></IconButton>
            <IconButton><MoreVertOutlinedIcon/></IconButton>
        </div>
    )
}