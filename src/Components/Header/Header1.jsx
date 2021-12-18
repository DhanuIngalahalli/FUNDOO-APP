import React from 'react'
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from "@mui/material/IconButton";
import './Header1.css'
import Home from '../../Pages/Home/Home';


export default function Header1(props) {

    const [open, setOpen] = React.useState(false);

 const takeclick=()=>{
    
        setOpen(!open)
    
       }
    return (
        <div>
        <div class="header">
                <div class="left-side">
                    <IconButton onClick={takeclick}><DehazeOutlinedIcon/></IconButton>
                    <img class="gb_tc gb_0d" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" srcset="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "></img>
                    <span className="text">Keep</span>
                </div>
                <div class="Search">
                <IconButton> <SearchOutlinedIcon/></IconButton>
                    <input className="input" type="text"  placeholder="Search" ></input>
                </div>
                <div class="right-side">
                <IconButton> <RefreshOutlinedIcon/></IconButton>
                <IconButton> <ViewAgendaOutlinedIcon/></IconButton>
                <IconButton> <SettingsOutlinedIcon/></IconButton>
                <div class="right-side-end">
                <IconButton> <AppsOutlinedIcon/></IconButton>
                <IconButton> <AccountCircleIcon/></IconButton>
                </div>
                </div>
            </div>
            <Home opennav={open}/>
            </div>
            
    )
}