import React from 'react';
import Task from './Task';
import ADrawer from "./ADrawer";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Grid,Paper} from '@material-ui/core';

const Tasks = (props) => {
    
    const paperStyle = {padding:20, width:720, margin:"50px auto"};
    
    return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
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
            <Fab color="primary" aria-label="add" align="right" onClick={props.addition}><AddIcon /></Fab> 
        </div>
                       
        </Paper>
        </Grid>
    );
};

export default Tasks;