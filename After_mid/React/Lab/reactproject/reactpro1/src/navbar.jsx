import { Link  } from "react-router-dom"

function navbar() {
    return(

    <nav>

        <ul style={{display:'flex' , gap : "15px" , listStyleType : 'none' }}>
          <li> <Link to ='/home' > Home  </Link></li>
          <li> <Link to ='/service' > Service  </Link> </li>
          <li>  <Link to ='/about' > About </Link> </li>
        </ul>

    </nav>

    )
}
export default navbar
