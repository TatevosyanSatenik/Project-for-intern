import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { deleteTask } from "../../store/task/action"

export const SeeAll = () => {
    const data = useSelector(st => st.taskReducer.arr)
    const params = useParams()
    const [task, setTask] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        let taskItem = data.find(e => e.id === +params.id)
        if (taskItem) {
            setTask(taskItem)
        } else {
            navigate(-1)
        }
    }, [])
    return (
        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold md:max-xl:flex font-size:200px">
            <p>Title - {task.title}
            </p>
            <p>
                description- {task.description},
            </p>
            <p>
                date- {task.date},

            </p>
            <div>
                <button onClick={() => {
                    dispatch(deleteTask(task.id))
                    navigate(-1)
                }}>Delete</button>
            </div>


        </div>
    )
}

