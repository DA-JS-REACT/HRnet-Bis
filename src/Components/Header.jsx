import React from 'react'
import logo from '../Assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

/**
 * Header  to the app
 * @returns  {React.ReactElement}
 */
export function Header() {
    const location = useLocation()

    return (
        <div className="Header">
            <div className="Header-contain">
                <div className="contain-logo">
                    <img className="logo" src={logo} alt="logo Wealth Health" />
                </div>
                <div className="contain-title">
                    <h1 className="title">HRnet</h1>
                </div>
                <div className="contain-link">
                    {location.pathname === '/employees' ? (
                        <Link className="link" to="/">
                            Home
                        </Link>
                    ) : (
                        <Link className="link" to="/employees">
                            Employees
                        </Link>
                    )}
                </div>
            </div>
            <div className="Header-ligne">
                <hr className="ligne" />
            </div>
        </div>
    )
}
