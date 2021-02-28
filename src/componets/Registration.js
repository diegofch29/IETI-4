import React, {useState} from 'react';
import {Paper,FormControl,InputLabel,Input} from '@material-ui/core';
import Button from '@material-ui/core/Button';


const Registration =()=>{
    const paperStyle = {padding:20, height:'70vh', width:280, margin:"50px auto"};
    
    return(
            <Paper elevation={10} style={paperStyle}>
                <form>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Full Name">Full Name</InputLabel>
                        <Input id="fullName" name="fullName"  autoFocus  />
                </FormControl>
                 <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Email">Email</InputLabel>
                        <Input id="email" name="email"  autoFocus  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="Password">Password</InputLabel>
                        <Input id="password" name="password"  autoFocus  />
                </FormControl>
                </form>
                 <Button  type='submit' fullWidth variant='outlined' color='primary'  align='center' style={{margin:'20px auto'}}>Summit</Button>
            </Paper>
    );
};

export default Registration;