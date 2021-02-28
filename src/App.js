import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './componets/Login.js';
import Tasks from './componets/Tasks.js';
import Addition from './componets/Addition.js';
import Registration from './componets/Registration.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

function App() {
    const userData = {
        userName : "diego@gmail.com",
        password : "1234"
    };
    
    const items=[{"description": "Work",
                   "status": "In progress",
                   "dueDate": 156464645646,
                   "responsible": {
                      "name": "Diego Chinchilla",
                       "email": "diego@gmail.com"
               }, 
           },
           {
  	"description": "Play",
  	"responsible": {
  		"name": "Diego Chinchilla",
  		"email": "diego@gmail.com"
  	},
  	"status": "ready",
  	"dueDate": 156464645648
  },
  {"description": "Collage",
  	"responsible": {
  		"name": "Diego Chinchilla",
  		"email": "diego@gmail.com"
  	},
  	"status": "Almost",
  	"dueDate": 156464645648}];
    
    
    localStorage.setItem("Username", userData.userName);
    localStorage.setItem("Password", userData.password);
    localStorage.setItem("isLoggedIn", false);
    
    let isLoggedIn = false;
    
    const [isLoggedInValue,setIsLoggedIn]=useState(isLoggedIn);
    
    const handleSuccessfullyLogin = (e) => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "/home";
    };
    
    const handleFailedLogin = (e) => {
        alert("Usuario o Clave Incorrectos");
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", false);
        window.location.href = "/";
    };
    
    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", false);
        window.location.href = "/";
    };
    const handleAddition= () =>{
        window.location.href = "/adition";
    }
    
    
    
    
    const LoginView = () => (<Login successfully={handleSuccessfullyLogin} failed={handleFailedLogin}/>);
    const HomeView = () => (<Tasks items={items} logout={handleLogout} email={userData.email} name={userData.username} addition={handleAddition}/>);
    const AdditionView = () => (<Addition/>)
    const RegistrationView= () =>(<Registration/>)
    
    return (
          <Router>
            <div className="App">
                <Route exact path="/" component={LoginView}/>
                <Route path="/home" component={HomeView}/>
                <Route path="/addition" component={AdditionView}/>
                <Route path="/registration" component={RegistrationView}/>      
            </div>
        </Router>
  );
}

export default App;
