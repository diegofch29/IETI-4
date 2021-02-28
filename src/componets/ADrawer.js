import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


const  ADrawer=(props)=> {
    
    
  const classes = useStyles;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          <ListItem button key={"Options"} >
            <ListItemIcon>{2 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={"Options"} />
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem button key={"Log out"}  onClick={props.logout}>  
            <ListItemIcon>{2  ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <Button onClick={toggleDrawer("left", true)} variant='outlined' color='primary'  align='left'>Menu</Button>
          <Drawer anchor="left" open={state["left"]} onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
    </div>
  );
};

export default ADrawer;

