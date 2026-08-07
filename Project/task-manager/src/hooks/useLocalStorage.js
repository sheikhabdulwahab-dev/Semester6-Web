
import { useState , useEffect } from "react";

function useLocalStorage(key , initialvalue ){

    const [value , setvalue] = useState(()=>{

        const saved = localStorage.getItem(key)
        return saved ? JSON.parse(saved) : initialvalue
    })

    useEffect(()=>{
        localStorage.setItem(key , JSON.stringify(value))
    } , [key , value])

    return [value , setvalue]


}

export default useLocalStorage