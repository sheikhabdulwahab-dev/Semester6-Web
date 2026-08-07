
import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children}) {

    const [isdark, setisdark] = useState(false)

    function toggletheme() {

        setisdark(prev => !prev)
    }

    return (

        <ThemeContext.Provider value={{ isdark, toggletheme }}>


            <div className={isdark ? 'bg-gray-900 min-h-screen' : 'bg-white min-h-screen'}>
                {children}
            </div>

        </ThemeContext.Provider>

    )
}

export function useTheme() {
    return useContext(ThemeContext)
}