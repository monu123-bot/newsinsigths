import{ React,useState} from 'react'
import firebaseauth from '../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {

  const [email,setEmail] = useState('')
  const [loginerror,setLoginerror] = useState(null)
    const [password,setPassword] = useState(null)
    const handleSubmit = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(firebaseauth,email,password).then((userCredential)=>{
          console.log(userCredential)
          setLoginerror(null)
        }).catch((error)=>{
          setLoginerror('Invalid Credentials')
        })

    }
    setInterval(function () {
        
        if (loginerror!=null){
            console.log('running')
            setLoginerror(null)
        }
       
    }, 3000);
    
    return (
        <>
        <hr/>
        <small>{loginerror}</small>
    <div className='login-form' >

<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control value={password} onChange={(e)=>{setPassword(e.target.value)}}  type="password" placeholder="Password" required />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Log In
      </Button>
      <br/>
      <small> or </small>
    </Form>

      {/* <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Enter Email' />
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' />
        <button type='submit'>Login</button>
        
      </form> */}
    </div>
 
    </>
   
    
  )
}

export default Login
