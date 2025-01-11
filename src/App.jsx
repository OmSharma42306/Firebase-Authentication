import { useState } from 'react'
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth"
import app from './config/firebase-config';
function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const auth = getAuth(app);
  const signUp = async(email,password) =>{
    try{
      const userCredential = await createUserWithEmailAndPassword(auth,email,password);
      console.log("User SignedUp, ",userCredential.user);
      alert("SignUp Successful!")
    }catch(error){
      console.error("Error! SigningUp!",error)
      alert("Error SignUp!")
    }
  }

  const signIn = async(email,password) =>{
    try{
      const userCredential = await signInWithEmailAndPassword(auth,email,password);
      console.log("User signin!",userCredential.user)
      alert("SignIn Successful!")
    }catch(error){
      console.error("Error : ",error);
      alert("SignIN Failed!")
    }
  }
  return (
    <>
    <input type="text" placeholder="Enter Your Email" onChange={(e)=>{
      setEmail(e.target.value);
      console.log(e.target.value);
    }}/>
    <input type="password" placeholder="Enter Your Password" onChange={(e) => {
      setPassword(e.target.value);
      console.log(e.target.value);
    }}
    />
    <button onClick={()=>{
      signUp(email,password)
    }}>SignUp</button>

    <button onClick={()=>{
      signIn(email,password);
    }}>SignIn</button>
    </>

  )
}

export default App
