import{ React,useState} from 'react'
import firebaseauth from '../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Signup = () => {
  const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('start')
        createUserWithEmailAndPassword(firebaseauth,email,password).then((userCredential)=>{
          console.log(userCredential)
        }).catch((error)=>{
          console.log(error)
        })

    }
    return (
<>
      <hr/>
    <div className='login-form'>
      <h1>Signup</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={(e)=>{setPassword(e.target.value)}}  type="password" placeholder="Password" required />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
      
    
    </div>
    </>
  )
}

export default Signup
