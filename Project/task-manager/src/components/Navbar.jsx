
import { useTheme } from "../context/ThemeContext";

function Navbar({ search, setsearch }) {

    const { isdark, toggletheme } = useTheme()

    return (
        <nav className={`px-6 py-4 flex justify-between items-center shadow-md ${isdark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`} >
            <h1 className="text-2xl font-bold text-blue-500">Task Manager</h1>

            <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setsearch(e.target.value)}
                className={`px-4 py-2 rounded-lg border outline-none ${isdark ? 'bg-gray-700 text-white border-gray-600' : 'bg-gray-100 text-gray-800 border-gray-300'}`}
            />

            <button
                onClick={toggletheme}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
            >
                {isdark ? '☀️ Light' : '🌙 Dark'}
            </button>

        </nav>
    )

}
export default Navbar