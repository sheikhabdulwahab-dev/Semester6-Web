
import { useMemo, useCallback } from "react";
import { useTheme } from "../context/ThemeContext";
import Taskitem from "./Taskitem";

function Tasklist({ task, search, filter, ondelete, ontoggle }) {

    const { isdark } = useTheme()

    const filteredtask = useMemo(() => {
        return task
            .filter(task => {
                if (filter === 'Active') return !task.completed
                if (filter === 'Completed') return task.completed
                return true
            })

            .filter(task => task.text.toLowerCase().includes(search.toLowerCase()))
    }, [task, search, filter])

    const handledelete = useCallback((id) => {
        ondelete(id)
    }, [ondelete])

    const handletoggle = useCallback((id) => {
        ontoggle(id)
    }, [ontoggle])




    return (
        <div className="px-4 py-2" >
            {filteredtask.length === 0 ? (
                <p className={`text-center py-10 text-lg ${isdark ? 'text-gray-400' : 'text-gray-500'}`}>
                    No tasks found!
                </p>
            ) : (
                filteredtask.map(task => (
                    <Taskitem
                        key={task.id}
                        task={task}
                        ondelete={handledelete}
                        ontoggle={handletoggle}
                    />
                ))
            )}

        </div>
    )
}
export default Tasklist