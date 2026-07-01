import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import { db } from "./initFirebase";
import { auth } from "./initFirebase";

import { addDoc, collection , getDocs , setDoc , doc} from 'firebase/firestore'


function App() {
  const googleAuth = new GoogleAuthProvider()

  const aunthentication = async function () {

    try {

      const credential = await signInWithPopup(auth, googleAuth)

      alert(credential.user.displayName)

      const docid = await addDoc(collection(db, "semester6user"), { name: credential.user.displayName, email: credential.user.email })
      alert(docid.id)

      


      // await setDoc(doc(db , "sem6user1" , docid.id ) , {username: credential.user.displayName , contact: "1234"})



    }

    catch (error) {

      alert(error)


    }



  }

  return (

    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }} >

      <button onClick={aunthentication}
        style={{ backgroundColor: "yellow", padding: "15px", border: "2px solid black" }}> Google Aunthentication</button>

    </div>

  )

}

export default App