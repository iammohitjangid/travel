import {useState} from 'react';

const useValidate = (validatefn)=>{
    const [ value , setValue ] = useState('');
    const [ IsInvalid , setIsInvalid] = useState(true);
    const [ IsTouch , setIsTouch] = useState(false);

    const validate = value=>{
        if(validatefn(value)){
            setIsInvalid(false);
        }else{
            setIsInvalid(true);
        }
    }
    const valueHandler=(e)=>{
        setValue(e.target.value);
        validate(e.target.value);
    }
    const BlurHandler=()=>{
        setIsTouch(true);
        validate(value);
    }
     
        return {
            value,
            setValue,
            IsInvalid,
            setIsInvalid,
            IsTouch,
            setIsTouch,
            valueHandler,
            BlurHandler,
            validate
        };
}

export default useValidate;