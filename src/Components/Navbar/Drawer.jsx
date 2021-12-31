import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import '../Navbar/Drawer.css'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer({opennav,changeToUpdatedNote}) {
  const theme = useTheme();


  return (
  <div className="box">
     
   
      <Drawer variant="permanent" open={opennav} style={{backgroundColor:'black'}} >
         
        <List>
          
            <ListItem button key="Notes"onClick={()=>changeToUpdatedNote("Notes")}>
              <ListItemIcon>
              <LightbulbOutlinedIcon /> 
              </ListItemIcon>
              <ListItemText primary="Notes" />
            </ListItem>

            <ListItem button key="Reminders">
              <ListItemIcon>
              <NotificationsOutlinedIcon /> 
              </ListItemIcon>
              <ListItemText primary="Reminders" />
            </ListItem>

            <ListItem button key="Edit labels">
              <ListItemIcon>
              <EditOutlinedIcon /> 
              </ListItemIcon>
              <ListItemText primary="Edit labels" />
            </ListItem>

            <ListItem button key="Archive"onClick={()=>changeToUpdatedNote("Archive")}>
              <ListItemIcon>
              <ArchiveOutlinedIcon /> 
              </ListItemIcon>
              <ListItemText primary="Archive" />
            </ListItem>

            <ListItem button key="Trash"onClick={()=>changeToUpdatedNote("Trash")}>
              <ListItemIcon>
              <DeleteOutlineOutlinedIcon /> 
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>

        </List>
       
      </Drawer>
     
     </div>
  );
}