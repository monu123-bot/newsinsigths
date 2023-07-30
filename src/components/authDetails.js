import {React,useEffect,useState} from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import firebaseauth from '../firebase'
import Login from './login'
import Signup from './signup'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const AuthDetails = () => {
    const  [authuser,setAuthuser] = useState(null)
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    useEffect(()=>{
        const listen = onAuthStateChanged(firebaseauth,(user)=>{
            if (user){
                setAuthuser(user)
            }
            else{
                setAuthuser(null)
            }
            
        })
        return ()=>{
            listen()
        }
    })
    const userSignedOut = ()=>{
        signOut(firebaseauth).then(()=>{
            console.log('signed out success')
        }).catch((error)=>{console.log('error in signing out',error)})
    }
  return (
<>
    <div className='auth-details' >
      {authuser ? <><p>{`You are logged in as ${authuser.email}`}</p> <Button className='btn-sm' onClick={userSignedOut} > Logout</Button> </>: <p><Login/>  <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button> </p> }
      <hr/>
      <br/>
      
    </div>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Thanks for joining with us !</Modal.Title>
    </Modal.Header>
    <Modal.Body><Signup/></Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      
    </Modal.Footer>
  </Modal>
  </>
  )
}

export default AuthDetails
