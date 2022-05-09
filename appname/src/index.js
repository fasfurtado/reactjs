import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"


function sum(a, b) {
    return a+b
}

function primeiroJSX() {
    return (
        <div>
           Francisco Furtado - Introdução ao ReactJS
        </div>
    )
}
const App = () => {

    return (
        <div className="App">
            {primeiroJSX()}
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)