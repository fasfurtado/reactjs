import React from "react"
import ReactDOM from "react-dom"
import Button from "./Button.jsx"
import "./styles.css"

function soma(a, b) {
    alert(a + b*3)
}

const App = () => {

    return (
        <div className="App">
            Hello World
            <Button onClick={() => soma(10,20)} name="Francisco Furtado" />
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)