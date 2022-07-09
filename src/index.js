import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import Entry from "./components/Entry"

function MainContent() {
    return (
        <div class="main">
            <Navbar/>
            <Entry/>
        </div>
    )
}

ReactDOM.render(<MainContent/>, document.getElementById("root"))