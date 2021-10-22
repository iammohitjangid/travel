import{Toast,ToastContainer} from 'react-bootstrap';

const Toasts =({showToast,msg="Successfully Login",errStatus="404",errID="Login Success"})=>{
    return(
        <ToastContainer position="bottom-end">
        <Toast show={showToast}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{errID}</strong>
          <small>{errStatus}</small>
        </Toast.Header>
        <Toast.Body className='Dark' >{msg}</Toast.Body>
      </Toast>
      </ToastContainer>
    );
}
export default Toasts

