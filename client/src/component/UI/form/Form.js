import React from 'react';
import classes from './Form.module.css';


const Form =(props)=>{
  const{
    children,
    title,
    buttonTitle
  } =props;
  return (
      <div className={`container-fluid ${classes.login} text-center  `}>
        <div className="form-siginin">
        <form className={`${classes.form_box} px-md-3 py-md-4 px-sm-2 py-sm-3 px-xs-1 py-xs-1`}>
        <p className="h3 mb-3 fw-normal">{title}</p>
        {children}
        <button className="w-100 btn btn-lg btn-primary" type="submit">{buttonTitle}</button>
        </form>
        </div>
      </div>
  );
}

export default Form;