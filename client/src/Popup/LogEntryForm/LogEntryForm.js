import React,{ useState }from 'react'
import '../../App.css';
import {useForm} from 'react-hook-form';
import {createLogEntry} from '../../api';

export default function LogEntryForm({lat,long,onClose ,onRefresh}) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
             setLoading(true);
             await createLogEntry(data,lat,long); 
             setLoading(false); 
             onClose();
             onRefresh();
            } catch (error) {
            setError(error);
        }
    
            
    }
 
    return (
        <form  className="entryForm" onSubmit={handleSubmit(onSubmit)}>
          {error&&<p>{error}</p>}
        <p>Latitude: <strong>{lat}</strong></p>
        <p>Longitude: <strong>{long}</strong></p>
        <input type="text" placeholder="Title" {...register("title", {required: true, maxLength: 80})} />
        <textarea rows={3} placeholder="Description"  {...register("description", {required: true, maxLength: 100})} />
        <input type="text" placeholder="Comments" {...register("comments")} />
        <input type="text" placeholder="Image URL " {...register("image", {pattern:/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/})} />
        <select {...register("rating", { required: true })}>
          <option value="5">Fantastic</option>
          <option value="4">Awesome</option>
          <option value="3" selected >Good</option>
          <option value="2">Desent</option>
          <option value="1">Not Ideal</option>
        </select>
        <input type="date" {...register("visitDate")} />
        <input disabled={loading} type="submit" name="submit"/>
      </form>
  
    );
}
