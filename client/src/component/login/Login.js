import React from 'react';
import Form from '../UI/form/Form';
import FormInput  from '../UI/form/formInput/FormInput';

import {login} from '../../store/action/authAction';
import {useDispatch ,useSelector} from 'react-redux';

const Login=(props)=>{

        const loginUser = useDispatch();
        const initialValue = {
          email:'',
          password:''
        };
        const submit=(form)=>{
          loginUser(login(form));
        }
    return(
                <Form 
                title="Please Log In"
                buttonTitle="LOG IN"
                buttonClass="w-100 btn btn-lg btn-primary"
                titleClass="mb-3 h3"
                initialValue={initialValue}
                submitData={submit}
                > 
                <FormInput 
                  type="email"
                  label="Email" 
                  inputClass="form-control"
                  name="email"
                  id="floatingInput"
                  placeholder="Email"
                  />
                <FormInput 
                  type="password"
                  label="Password" 
                  inputClass="form-control"
                  name="password"
                  id="floatingInput"
                  placeholder="Password"
                  />
                  </Form>
            
    );
};
export default Login;