import { Link  } from "react-router-dom"
import{ signInWithPopup , GoogleAuthProvider , updateProfile,  createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from './firebase/firebaseInit'

function navbar() {
     
    const provide = new GoogleAuthProvider() 

     const login = async function(){
      try{
        const usercred = await createUserWithEmailAndPassword(auth , 'ax@a.com' , 'abcdefg')
        alert(usercred.user.email)
         await updateProfile(usercred.user , {displayName : 'Ahmad'})
        alert(usercred.user.displayName)
      }
      catch(error){
        alert(error)
      }


     }

     const googleauth = async function(){
       try{
        const usercred = await signInWithPopup(auth ,provide)
        alert (usercred.user.displayName)

       }
       catch(error){
        alert(error)

       }


     }
    return(

    <nav>

        <ul style={{display:'flex' , gap : "15px" , listStyleType : 'none',   alignItems : "center" }}>
          <li> <Link to ='/home' > Home  </Link></li>
          <li> <Link to ='/service' > Service  </Link> </li>
          <li>  <Link to ='/about' > About </Link> </li>
        </ul>

        <button onClick={login}> login</button>

        <button onClick={googleauth}> Google Auth</button>

    </nav>

    )
}
export default navbar
