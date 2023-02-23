import { Link, Outlet } from "react-router-dom"
import "./menu.css"
export const Menu = () => {
    return (
        <div>
            <header>
                <div className="img">
                    <h1 className="title">Welcome to my page</h1>
                </div>
                <div className="menu">
                    <nav>
                        <ul>
                            <li ><Link to="/">Home</Link></li>
                            <li ><Link to="/addTask">AddTask</Link></li>
                            <li ><Link to="/seeTask">SeeTasks</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </div>
    )
}