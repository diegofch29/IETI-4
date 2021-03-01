import React, {useState} from 'react';
import {Paper,FormControl,InputLabel,Input} from '@material-ui/core';
import Button from '@material-ui/core/Button';


const Addition =()=>{
    const paperStyle = {padding:20, height:'70vh', width:280, margin:"50px auto"};
    
    return(
            <Paper elevation={10} style={paperStyle}>
                <h1>New Task</h1>
                <form>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Description">Description</InputLabel>
                        <Input id="description" name="description"  autoFocus  />
                </FormControl>
                 <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Status">Status</InputLabel>
                        <Input id="status" name="status"  autoFocus  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Responsible">Responsible</InputLabel>
                        <Input id="responsible" name="responsible"  autoFocus  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Date">Date</InputLabel>
                        <Input id="date" name="date" type='date' autoFocus  />
                </FormControl>
                </form>
                 <Button  type='submit' fullWidth variant='outlined' color='primary'  align='center' style={{margin:'20px auto'}}>Summit</Button>
                         <Fab color="primary" aria-label="add" align="right" ><AddIcon /></Fab>
            </Paper>
    );
};

export default Addition;