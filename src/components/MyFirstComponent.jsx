import React from 'react'
import "./FirstComponentStyle.css"

export default function MyFirstComponent() {
 
 const person = { name: "Pingucoder",
 email: "pingucoder@gmail.com"
}
const elemStyle ={
    backgroundColor: "cyan",
    fontSize: "20px", 
    boxShadow: "0px 20px 10px"
}


    return (
    <>
    <div>
      <h1 style={{
    backgroundColor: "cyan",
    fontSize: "20px", 
    boxShadow: "0px 20px 10px"
}}> {person.name}  </h1>
      <h3 className={'active blBg'}>{person.email}</h3>
      <h2 className={'active'}style={elemStyle}>Hi</h2>
      <button onClick={saySalem}>Click me</button>
    </div>
    <h1 className={person.name=="Pingu coder" ? "blBg": "greenBg"}>Check Name</h1>
    </>
  )
}

function saySalem() {
    return "Salem" 
}
