import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

export default function Listitems(props) {

    const handleClick =(showData)=>{
       props.handle_Components(showData) 
    }

  return (
    <div>
        <ListItem button onClick={()=>handleClick(0)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={()=>handleClick(1)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Crrent Post" />
        </ListItem>

        <ListItem button onClick={()=>handleClick(2)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="User Details" />
        </ListItem>

        <ListItem button onClick={()=>handleClick(3)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Basic Post" />
        </ListItem>

        <ListItem button onClick={()=>handleClick(4)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Nesw Slider Post" />
        </ListItem>

        <ListItem button onClick={()=>handleClick(5)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Recent Post" />
        </ListItem>
     
        <ListItem button onClick={()=>handleClick(6)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Latest Articles" />
        </ListItem>

        <ListItem button onClick={()=>handleClick(7)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Popular Post" />
        </ListItem>
        
        <ListItem button onClick={()=>handleClick(8)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="User Table" />
        </ListItem>

        <ListItem button onClick={()=>handleClick(9)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Sport News" />
        </ListItem>

        <ListItem button onClick={()=>handleClick(10)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Politices News" />
        </ListItem>

        <ListItem button onClick={()=>handleClick(11)}>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Log Out" />
        </ListItem>

    </div>
  )
}
