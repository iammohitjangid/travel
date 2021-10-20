import React from 'react';
import Form from '../UI/form/Form';
import FormInput  from '../UI/form/formInput/FormInput';
const Login=(props)=>{
    return(
      
                <Form 
                title="Please Log In"
                buttonTitle="LOG IN"
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