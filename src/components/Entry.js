import React from "react"
import pin from "../images/pin.png"
export default function Navbar(props) {
    return (
        <div className="entry">
            <img src={`../images/${props.coverImg}`}/>
            <div className="location">
                <img className="location--pin" src={pin}/>
                <p>{props.country}</p>
                <a href={props.mapsLink}>View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <h3>{props.date}</h3>
            <p>{props.description}</p>
        </div>
    )
}