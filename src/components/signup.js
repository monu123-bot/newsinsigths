import{ React,useState} from 'react'
import firebaseauth from '../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
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
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Enter Email' />
        <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter Password' />
        <button type='submit'>Signup</button>
        
        
      </form>
    </div>
  )
}

export default Signup
