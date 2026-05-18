

// import Navbar from './component/nav';

// import Mainbody from './component/mainbody';

// import Footer from './component/footer';

// import Left  from './component/sidebarleft'
import {  BrowserRouter , Link , Routes , Route} from  'react-router-dom'

import Home from './home.jsx'

import About from './about.jsx' 

import Service from './services.jsx'

import Navbar from './navbar.jsx'

import {themecontext} from './themecontext1'



function App() {

  return (

    <themecontext.Provider value= 'blue'>  

    <BrowserRouter>

       <Navbar/>
      

      <Routes>
        <Route path ="/" element = {<Home/>}> </Route>
        <Route path ="/home" element = {<Home/>}> </Route>
        <Route path ="/service" element = {<Service/>}> </Route>
        <Route path ="/about" element = {<About/>}> </Route>

      </Routes>


    </BrowserRouter>

    </themecontext.Provider>
    
    

    // <h1>halo</h1>

    // <Home/>

//     <div>

// {/* 
//       //  {/* <Left/> */}
//       //  {/* <Left/> */}
//       // <Navbar />
//       // <Mainbody />
//       //  <Footer /> */}
       


//     </div>

  

  )

}
export default App;