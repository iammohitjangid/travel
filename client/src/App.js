import React ,{useEffect}from 'react';
import {useDispatch} from 'react-redux';
import {register} from './store/action/authAction';
import  './App.css';
import Navigation from './component/navigation/Navigation';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './component/home/Home';

function App(){
  const attemptToLogin = useDispatch();
  const newUser = {email:"mohitsharma305@gmail.com",name:'mohit',password:"123456"};
  useEffect(()=>{
    attemptToLogin(register(newUser));
  },[])
  return (
    <div className="App">
       <Navigation />
       <Switch>
         <Route path="/about">
           <h2>about</h2>
         </Route>
         <Route path="/login">
           <h2>login</h2>
         </Route>

         <Route exact path="/" component ={Home}/>
         <Redirect to="/" />
       </Switch>
    </div>
  );
}

export default App;
