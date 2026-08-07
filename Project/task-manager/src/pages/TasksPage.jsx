
import { useState, useCallback } from "react";
import useLocalStorage from '../hooks/useLocalStorage'
import TaskForm from '../components/TaskForm'
import Tasklist from '../components/Tasklist'
import { useTheme } from "../context/ThemeContext";

function TasksPage({ search }) {

    const [tasks, settasks] = useLocalStorage('tasks' , [])
    const [filter, setfilter] = useState('All')
    const { isdark } = useTheme()

    const addtask = useCallback((newtask) => {
        settasks(prev => [...prev, newtask])
    }, [settasks])

    const deletetask = useCallback((id) => {
        settasks(prev => prev.filter(task => task.id !== id))
    }, [settasks])

    const toggletask = useCallback((id) => {
        settasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task))
    }, [settasks])

    return (
        <div className="max-w-3xl mx-auto p-4" >

            <TaskForm onaddtask={addtask} />

            <div className="flex gap-3 px-4 mb-4" >
                {['All', 'Active', 'Completed'].map(btn => (
                    <button
                        key={btn}
                        onClick={() => setfilter(btn)}
                        className={`px-4 py-2 rounded-lg font-semibold transition ${filter === btn ? 'bg-blue-500 text-white' : isdark ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}

                    >
                        {btn}
                    </button>

                ))}

            </div>

            <Tasklist
                task={tasks}
                search={search}
                filter={filter}
                ondelete={deletetask}
                ontoggle={toggletask}

            />

        </div>
    )
}
export default TasksPage