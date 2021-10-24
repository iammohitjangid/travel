import React,{useState}from 'react';
import classes from './Form.module.css';

export const formContext = React.createContext({
  form:{},
  handleFormChange:()=>{}
});


const Form =({children,title,titleClass=" ",buttonTitle,buttonClass,initialValue={},submitData})=>{
  const[form,setForm]=useState(initialValue);

  const formSubmit=(e)=>{
    e.preventDefault();
    submitData(form)
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  };
 
  return (
    <formContext.Provider value={{form,handleFormChange}}>
      <div className={`container-fluid ${classes.login} text-center  `}>
        <div className="form-siginin">
        <form 
        className={`${classes.form_box} px-md-3 py-md-4 px-sm-2 py-sm-3 px-xs-1 py-xs-1`}
        onSubmit={formSubmit}
        >
        <p className={` fw-normal ${titleClass}`}>{title}</p>
        {children}
        <button className={buttonClass}
         type="submit">{buttonTitle}</button>
        </form>
        </div>
      </div>
      </formContext.Provider>
  );
}

export default Form;