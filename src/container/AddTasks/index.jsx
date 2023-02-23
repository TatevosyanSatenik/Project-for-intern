import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addTask } from "../../store/task/action"
import "./addTaask.css"

export const AddTask = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const addNewTask = (data) => {
        dispatch(addTask(data))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(addNewTask)}>
                <div>
                    <label>Title</label>
                    <input type="text" placeholder="Title" {...register('title', { required: true })} />
                    {errors.title && <p>Title is required.</p>}
                </div>
                <div>
                    <label>Date</label>
                    <input type='date'  {...register('date', { required: true })} />
                    {errors.date && <p>Date is required.</p>}
                </div>
                <div>
                    <label>Description</label>
                    <textarea type='text' placeholder='Description' {...register('description', { required: true })} ></textarea>
                    {errors.description && <p> Description is required.</p>}
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}
