
import { useTheme } from "../context/ThemeContext";

function Taskitem({ task, ondelete, ontoggle }) {

    const { isdark } = useTheme()

    const prioritycolor = {
        Low: 'bg-green-100 text-green-800',
        Medium: 'bg-yellow-100 text-yellow-800',
        High: 'bg-red-100 text-red-800'

    }

    return (
        <div className={`flex items-center justify-between p-4 rounded-lg mb-2 shadow-sm ${isdark ? 'bg-gray-700' : 'bg-white'}`}>
            <div className="flex items-center gap-3" >
                <input
                    type='checkbox'
                    checked={task.completed}
                    onChange={() => ontoggle(task.id)}
                    className="w-5 h-5 cursor-pointer"
                />

                <span className={`text-base ${task.completed ? 'line-through text-gray-400' : isdark ? 'text-white' : 'text-gray-800'}`}>
                    {task.text}
                </span>

            </div>


            <div className="flex items-center gap-3">

                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${prioritycolor[task.priority]}`}>
                    {task.priority}
                </span>

                <button onClick={() => ondelete(task.id)} className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm">
                    Delete
                </button>


            </div>
        </div>
    )
}
export default Taskitem