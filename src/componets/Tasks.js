import React,{useState} from 'react';
import Task from './Task';
import ADrawer from "./ADrawer";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Grid,Paper,Dialog} from '@material-ui/core';
import Addition from './Addition.js';

const Tasks = (props) => {
    
    const paperStyle = {padding:20, width:720, margin:"50px auto"};
    
    
    
    const [open,setOpen] = useState(false);
    
    console.log(props.items);
    
    const handleAddition=(task)=>{
        props.addition(task);
        setOpen(!open);    
    };
    
    const handleClickAdditon=()=>{
        setOpen(!open); 
    };
    
    return (
        <Grid>
        <Paper elevation={10} style={paperStyle} visible={false}>
        <div>
            <ADrawer logout={props.logout}/>
            {props.items.map((item,i) => {
                return (<Task key={i}
                              responsible={item.responsible}
                              description={item.description}
                              status={item.status}
                              dueDate={item.dueDate}/>
                );
            })}
            <Fab color="primary" aria-label="add" align="right" onClick={handleClickAdditon}><AddIcon /></Fab> 
        </div>         
        </Paper>
        <Dialog open={open}>
            <Addition addition={handleAddition}/>
        </Dialog>
        </Grid>
    );
};

export default Tasks;