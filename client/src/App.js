import React ,{useEffect}from 'react';
import {useDispatch} from 'react-redux';
import {loadUser} from './store/action/authAction';
import  './App.css';
import Navigation from './component/navigation/Navigation';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './component/home/Home';
import Login from './component/login/Login';
import Register from './component/signin/Register';
import Map from './component/map/Map';

function App(){

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch]);
  return (
    <div className="App">
       <Navigation />
  
       <Switch>
         <Route path="/map"  component={Map}/>
         <Route path="/register"  component={Register}/>
         <Route path="/login"  component={Login}/>
         <Route exact path="/" component ={Home}/>
         <Redirect to="/" />
       </Switch>

    </div>
  );
}

export default App;
