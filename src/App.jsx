import { useState } from 'react'
import {getAuth,signInWithEmailAndPassword,GoogleAuthProvider,createUserWithEmailAndPassword, signInWithPopup,signOut} from "firebase/auth"
import app from './config/firebase-config';
import { useNavigate } from 'react-router-dom';
function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [user,setUser] = useState(false);
  const navigate  = useNavigate();
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
      setUser(true);
      alert("SignIn Successful!")
      navigate("/landing")

    }catch(error){
      console.error("Error : ",error);
      alert("SignIN Failed!")
    }
  }

  // Google SignIn
  const googleSignIn = async() =>{
    const provider = new GoogleAuthProvider();
    try{
      const result = await signInWithPopup(auth,provider);
      const user = result.user;
      const idToken = await user.getIdToken();
      alert("User Signed in With Google: ");
      console.log("User Signed in With Google!",user);
      console.log("ID Token:",idToken);
      navigate("/landing")
      setUser(true);
      // const responce = await fetch("http://localhost:3000/secure",{
      //   method:"GET",
      //   headers:{
      //     Authorization : `Bearer ${idToken}`
      //   }
      // });
      // const data = await responce.json();
      // console.log("Secure Api Responce",data)
      
    }catch(error){
        console.error("Error Signing in With Google :",error.message);
    }
  }

  const logout = async () =>{
    try{
      await signOut(auth);
      setUser(null);
    }catch(error){
      console.error("Error during logout",error)
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
    
    
    <h1>Signin With Google!</h1>
    <button onClick={googleSignIn}>SignIn with Google</button>
    
    
    </>

    
  )
}

export default App
