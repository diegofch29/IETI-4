import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './componets/Login.js';
import Tasks from './componets/Tasks.js';
import Registration from './componets/Registration.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

function App() {
    let userData = {
        name : "diego",
        email: "diego@gmail.com",
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
    
    const [itemsState,setItems]=useState(items);
    const [userInfo,setUser]=useState(userData);
    
    
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("items", JSON.stringify(items));
    
    
    function setUserData(){
        localStorage.setItem("Username", userData.name);
        localStorage.setItem("Password", userData.password);
    }
    
    setUserData();
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
    
    
    const handleAddition= (newTask) =>{
        setItems(itemsState => [...itemsState,newTask]);
    };
    
    const handleRegistration = (newUser) => {
        window.location.href = "/";
        userData = newUser;
        setUser();
        console.log(newUser);
        alert();
        setUserData();
    }
    
    
    
    const LoginView = () => (<Login successfully={handleSuccessfullyLogin} failed={handleFailedLogin}/>);
    const HomeView = () => (<Tasks items={itemsState} logout={handleLogout} addition={handleAddition}/>);
    const RegistrationView= () =>(<Registration register={handleRegistration}/>)
    
    return (
          <Router>
            <div className="App">
                <Route exact path="/" component={LoginView}/>
                <Route path="/home" component={HomeView}/>
                <Route path="/registration" component={RegistrationView}/>      
            </div>
        </Router>
  );
}

export default App;
