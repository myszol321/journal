import React from "react"
import pin from "../images/pin.png"
import photo from "../images/mount-fuji.jpg"

export default function Navbar(props) {
    return (
        <div className="entry">
            <img className="entry--photo" src={photo} alt={"logo"}/>
            <div className="location">
                <img className="location--pin" src={pin}/>
                <p>{props.country.toUpperCase()}</p>
                <a href={props.mapsLink}>View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <h3>{props.date}</h3>
            <p>{props.description}</p>
        </div>
    )
}