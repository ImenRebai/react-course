import React from 'react'

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
      <h3 style = {{backgroundColor: "green"}}>{person.email}</h3>
      <h2 style={elemStyle}>Hi</h2>
      <button onClick={saySalem}>Click me</button>
    </div>
    </>
  )
}

function saySalem() {
    return "Salem" 
}
