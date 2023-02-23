import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Menu } from "../components/Menu"
import { AddTask } from "../container/AddTasks"
import { Home } from "../container/Home"
import { SeeAll } from "../container/Details"
import { SeeTask } from "../container/Tasks"

export const MyRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Menu />}>
                        <Route path='' element={<Home />} />
                        <Route path='addTask' element={<AddTask />} />
                        <Route path='seeTask' element={<SeeTask />} />
                        <Route path='seeAllTasks/:id' element={<SeeAll />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}