
import {useState} from 'react';

function FormInput(props) {
  const[input,setInput] = useState({});
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
        onChange={e=>{setInput({
          [e.target.name]:e.target.value,

        })}}
        value={input[id]}
      />
       <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default FormInput;