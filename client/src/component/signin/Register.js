import React from 'react';
import Form from '../UI/form/Form';
import FormInput  from '../UI/form/formInput/FormInput';
const Register=(props)=>{
    return(
      
                <Form 
                title="Register"
                buttonTitle="REGISTER"
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
                  name="Name"
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