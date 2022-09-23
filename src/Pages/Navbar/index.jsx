import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./style.css"

export default function Header() {
    const [active, setActive] = useState("menu");
    const [togglerIcon, setIcon] = useState("navToggler");
    const navToggle = () => {
        active === 'menu' ?
            setActive('menuActive menu') :
            setActive('menu')

        togglerIcon === 'navToggler' ?
            setIcon('navToggler toggle') :
            setIcon('navToggler')
    }

    return (
        <div className="headWrapper">
            <div className="header">
                <div className="logo">
                ₹ExpenCy
                </div>

                <div className={active} >
                    <ul>
                        <li onClick={navToggle}><NavLink to={'/'}>Home</NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/history'}>History</NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/borrow&lend'}>Borrow/lend</NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/graph'}>Graph</NavLink></li>
                        {/* <li><NavLink to={'/connect'}>Connect</NavLink></li> */}
                    </ul>
                </div>

                <div onClick={navToggle} className={togglerIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </div>
        </div>
    )
}