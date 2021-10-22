
import {useContext} from 'react';
import { formContext} from '../Form';

function FormInput(props) {
  const useFormContext = useContext(formContext);
  const {
    label, 
    type = 'text', 
    name,
    id,
    placeholder,
    inputClass="form-control"
  } = props;

  let  len ={};
  if(type==='password'){
    len['maxLength'] = 6;
  }
  return (
    <div className="form-floating">
     
      <input
        type={type}
        className={inputClass}
        name={name}
        id={id}
        placeholder={placeholder}
        {...len}
        onChange={useFormContext.handleFormChange}
        value={useFormContext.form[name]}
        required
      />
       <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default FormInput;