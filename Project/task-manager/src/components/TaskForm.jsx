
import { useState, useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

function TaskForm({onaddtask}) {

    const [text, settext] = useState('')
    const [priority, setpriority] = useState('Medium')
    const inputref = useRef(null)
    const { isdark } = useTheme()

    useEffect(() => {
        inputref.current.focus()

    }, [])

    function handlesubmit(e) {
        e.preventDefault()
        if (text.trim() === '')
            return
        onaddtask({
            id: Date.now(),
            text: text,
            priority: priority,
            completed: false

        })

        settext('')
        setpriority('Medium')
    }

    return (

        <form onSubmit={handlesubmit} className="flex gap-3 p-4" >

            <input
                ref={inputref}
                type="text"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => settext(e.target.value)}
                className={`flex-1 px-4 py-2 rounded-lg border outline-none ${isdark ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'}`}
            />

            <select value={priority}
                onChange={(e) => setpriority(e.target.value)}
                className={`px-4 py-2 rounded-lg border ${isdark ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'}`}>

                <option>Low</option>
                <option>Medium</option>
                <option>High</option>

            </select>

            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
                Add
            </button>

        </form>

    )

}
export default TaskForm
  