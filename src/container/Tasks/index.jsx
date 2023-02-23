import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { deleteTask } from "../../store/task/action";

export const SeeTask = () => {
    const data = useSelector(st => st.taskReducer.arr)
    console.log(data, 'data');
    const dispatch = useDispatch()
    return (
        <div>
            See Task
            <table class="border-separate border-spacing-2 border border-slate-400 ">
                
                    <thead>
                        <tr>
                        <th class="border border-slate-300">Title</th>
                        <th class="border border-slate-300">Description</th>
                        <th class="border border-slate-300">Date</th>
                        <th class="border border-slate-300" >Delete</th>
                        <th class="border border-slate-300">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((task)=>{
                            return(
                                    <tr key={task.id}>
                                    <td class="border border-slate-300">{task.title}</td>
                                    <td class="border border-slate-300">{task.description}</td>
                                    <td class="border border-slate-300">{task.date}</td>
                                    <td class="border border-slate-300">
                                            <button onClick={() => {
                                                dispatch(deleteTask(task.id))
                                            }}>
                                                Delete
                                            </button>
                                        </td>
                                    <td class="border border-slate-300" >
                                            <button>
                                                <Link to={'/seeAllTasks/' + task.id}>See Task Details</Link>
                                            </button>
                                        </td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}