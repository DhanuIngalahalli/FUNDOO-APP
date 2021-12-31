import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import './Colorspopper.css';
import IconButton from "@mui/material/IconButton";

export default function SimplePopper({ handleNoteColor }) {
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;


  const colors = ["#fff", "#f28b82", "#fbbc04", "#fff475", "#ccff90", "#a7ffeb",
  "#cbf0f8", "#aecbfa", "#d7aefb", "#fdcfe8", "#e6c9a8","#fff475"]

  return (
    <div>
      <IconButton aria-describedby={id} type="button" onClick={handleClick}>
    <ColorLensOutlinedIcon/>
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="top">
        
<div className="box1" style={{backgroundColor: 'white'}} >
      {colors.map((color) => (
                       <div className="box2" id={color} style={{backgroundColor: color}} onClick={()=> handleNoteColor(color)}></div>
                    ))}
                    </div>
      </Popper>
    </div>
  );
}
