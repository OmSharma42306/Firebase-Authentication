import { getAuth, signOut } from "firebase/auth"
import app from "./config/firebase-config"
import { useNavigate } from "react-router-dom";

export default function Landing(){
    const auth = getAuth(app);
    const navigate = useNavigate();
    const logout = async () =>{
        try{
            await signOut(auth);
            console.log("signout successfully!");
            alert("Eeyyyyy..")
            navigate("/")
            
        }catch(error){
            console.error("Error During Signout",error)
        }
    }
return <div>
    
    hi welcome everyone.

    <button onClick={logout}>LogOut</button>
    
    
    </div>
}