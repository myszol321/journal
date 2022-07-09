import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import Entry from "./components/Entry"
import data from "./data"

function MainContent() {
    const entries = data.map(entry => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })
    return (
        <div class="main">
            <Navbar/>
            <section className="entries-list">
                {entries}
            </section>
        </div>
    )
}

ReactDOM.render(<MainContent/>, document.getElementById("root"))