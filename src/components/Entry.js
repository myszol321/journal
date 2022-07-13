import React from "react"
import pin from "../images/pin.png"

export default function Navbar(props) {

    return (
        <div className="entry">
            <img className="entry--photo" src={`/images/${props.coverImg}`} alt={"logo"}/>
            <div className="location">
                <img className="location--pin" src={pin}/>
                <p className="location--country">{props.country.toUpperCase()}</p>
                <a className="location--link" href={props.mapsLink} target="_blank">View on Google Maps</a>
            </div>
            <h1>{props.title}</h1>
            <h3>{props.date}</h3>
            <p>{props.description}</p>
        </div>
    )
}