
import {useContext} from 'react';
import { formContext} from '../Form';

function FormInput(props) {
  const useFormContext = useContext(formContext);
  const {
    label, 
    labelClass,
    type = 'text', 
    name,
    id,
    placeholder,
    inputClass="form-control",
    input=""
  } = props;

  let  len ={};
  if(type==='password'){
    len['maxLength'] = 6;
  }
  return (
    <div className="form-floating">
     
      <input
        type={type}
        className={`${inputClass} ${input}` }
        name={name}
        id={id}
        placeholder={placeholder}
        {...len}
        onChange={useFormContext.handleFormChange}
        value={useFormContext.form[name]}
        required
      />
       <label htmlFor={id} className={labelClass}>{label}</label>
    </div>
  )
}

export default FormInput;