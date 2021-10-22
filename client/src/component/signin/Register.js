import React from 'react';
import Form from '../UI/form/Form';
import FormInput  from '../UI/form/formInput/FormInput';

import {useDispatch} from 'react-redux';
import {register} from '../../store/action/authAction';

const Register=(props)=>{
  const registerDispatch = useDispatch();
  const initialValue = {
    email:'',
    name:'',
    password:''
  };
  const submit=(form)=>{
    registerDispatch(register(form));
  }
    return(
      
                <Form 
                title="Register"
                buttonTitle="REGISTER"
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
                  type="text"
                  label="Name" 
                  inputClass="form-control"
                  name="name"
                  id="floatingInput"
                  placeholder="Name"
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
export default Register;