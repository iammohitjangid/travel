import React  from 'react';
import Form from '../../../UI/form/Form';
import FormInput from '../../../UI/form/formInput/FormInput';

const LocationForm =({onSubmit})=>{
    const initialValue ={
      'title':' ',
      'description':'',
      'comments':'',
      'visitDate':'',
      'image' :'',
      'rating':5
    }
   
  
    return(
      <Form 
        title="Add Location"
        titleClass = "text-dark p-0 m-0 mb-0"
        buttonTitle="Add"
        buttonClass="btn btn-primary btn-lg "
        initialValue={initialValue}
        submitData={onSubmit}
      >
        <FormInput 
          label="Title"
          labelClass="text-dark"
          name="title"
          id="title"
          placeholder="Title"
          input="p-0 m-0"
        />
        <FormInput 
          label="Description"
          labelClass="text-dark"
          name="description"
          id="description"
          placeholder="Description"
          input="p-0 m-0"
        />
        <FormInput 
          label="Comments"
          labelClass="text-dark"
          name="comments"
          id="comments"
          placeholder="Comments"
          input="p-0 m-0"
        />
       
        
        <FormInput 
          labelClass="text-dark"
          type="date"
          name="visitDate"
          id="visitDate"
          input="p-0 m-0"
        />
        <FormInput 
          label="Image"
          labelClass="text-dark"
          name="image"
          id="image"
          placeholder="Image"
         
          input="p-0 m-0"
        />
        <FormInput 
         label="Rating"
          labelClass="text-dark"
          type='number'
          name="rating"
          id="rating"
          placeholder="rating"
          input="p-0 m-0"
        />
        <button className="btn btn-danger btn-lg">
        Close
      
        </button>


      </Form>


      );
};

export default LocationForm;