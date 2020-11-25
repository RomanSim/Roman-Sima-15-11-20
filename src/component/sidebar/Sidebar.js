import React from 'react'
import './../sidebar/Sidebar.css'
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom'

function Sidebar() {

    return (
        <div className="sidebar">
            <ul className="sidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li key={key} className="row"
                            id={window.location.pathname == val.link ? "active" : ""}>
                            <Link className="link" to={val.link}>
                                <div id="icon">
                                    {val.icon}
                                </div>
                                <div id="title">
                                    {val.title}
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Sidebar
