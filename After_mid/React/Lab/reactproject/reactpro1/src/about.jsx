import { useContext, useState } from "react"
import {themecontext} from './themecontext1'

function about() {
    const contextcolor = useContext(themecontext)

    const [color , setcolor] = useState('gray')
    const theme = function(){
        setcolor(contextcolor)
    }



    return(

        <div style={{background:color , height : '100vh'}}> 

            <h1> About</h1>
            <button onClick={theme}> Change Color</button>

        </div>
 
    )
}
export default about