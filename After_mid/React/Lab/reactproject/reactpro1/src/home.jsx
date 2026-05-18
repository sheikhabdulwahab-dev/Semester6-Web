// import Navbar from "./pages/Navbar"
// import MainContent from "./pages/MainContent"
// import Footer  from "./pages/footer"

import { useState } from "react"

 

function Home(){

    const [color , setcolor] = useState('gray')

    const green = function (){ setcolor('green')}
    const yellow = function (){ setcolor('yellow')}
    

     


    return(
        // <div>
        //     <Navbar/>
        //     <MainContent/>
        //     <Footer/>
        // </div>
         <div style={{backgroundColor: color , height : '100vh'   }}>
            <h1 > This is Home Page</h1>
            <button onClick={green}> Green</button>
            <button onClick={yellow}> Yellow</button>
         </div>
    )


}

export default Home