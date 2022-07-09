import React from "react"
import globe from "../images/globe.png"
export default function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar--icon" src={globe}/>
            <p className="navbar--text">my travel journal.</p>
        </div>
    )
}