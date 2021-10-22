import React ,{useEffect,useState}from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {loadUser} from './store/action/authAction';
import  './App.css';
import Navigation from './component/navigation/Navigation';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './component/home/Home';
import Login from './component/login/Login';
import Register from './component/signin/Register';
import Map from './component/map/Map';
import Toasts from './component/UI/toast/Toasts';
import Loader from './component/UI/loader/Loader';
import UserMap from './component/map/usermap/UserMap';


function App(){
  
  const [errToast,setErrToast] = useState(false); 
  const err = useSelector(state=>state['err']['msg']['msg']);
  const errStatus = useSelector(state=>state['err']['status']);
  const errID = useSelector(state=>state['err']['id']);

  const isAuthenticated = useSelector(state=>state['auth']['isAuthenticated']);
  const isLoading = useSelector(state=>state['auth']['isLoading']) ;


  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch]);
  useEffect(()=>{
    setErrToast(true);
    const delay = setTimeout(()=>{
      setErrToast(false);
    },3000)
    
  },[err,errStatus,errID]);



  let authRoute=null;
  authRoute=(
    isAuthenticated ? 
    (<>
         <Route path="/map"  component={Map}/>
         <Route exact path="/"  component={UserMap}/>
         <Redirect to="/" />
    </>)
    :
    (<>
         <Route path="/map"  component={Map}/>
         <Route path="/register"  component={Register}/>
         <Route path="/login"  component={Login}/>
         <Route exact path="/" component ={Home}/>
         <Redirect to="/" />
    </>)
  )



  return (
    <div className="App">
       <Navigation />
    {  !isLoading ? 
       (<>
        <Switch>
          {authRoute}
        </Switch>
        <Toasts
          showToast={errToast}
          msg={err}
          errStatus={errStatus}
          errID={errID}
        />
        </>)
       : <Loader />
    }
    </div>
  );
}

export default App;
