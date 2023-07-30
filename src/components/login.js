import{ React,useState} from 'react'
import firebaseauth from '../firebase'
import {signInWithEmailAndPassword} from 'firebase/auth'
const Login = () => {
  const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(firebaseauth,email,password).then((userCredential)=>{
          console.log(userCredential)
        }).catch((error)=>{
          console.log(error)
        })

    }
    return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Enter Email' />
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' />
        
        
      </form>
    </div>
  )
}

export default Login
