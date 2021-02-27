import React from 'react';
import Task from './Task';
import ADrawer from "./ADrawer";
import {Grid,Paper} from '@material-ui/core';

const Tasks = (props) => {
    
    const paperStyle = {padding:20, height:'70vh', width:720, margin:"50px auto"};
    
    return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
        <div>
            <ADrawer />
            {props.items.map((item,i) => {
                return (<Task key={i}
                              responsible={item.responsible}
                              description={item.description}
                              status={item.status}
                              dueDate={item.dueDate}/>
                );
            })}
        </div>
        </Paper>
        </Grid>
    );
};

export default Tasks;