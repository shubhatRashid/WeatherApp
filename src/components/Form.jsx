import React from "react"
import Form from 'react-bootstrap/Form';
import Button from "./Button.jsx"
import "../styles.css";
function InputSizesExample() {
  var temp = ""
  var [city,setCity] = React.useState("")
  function handleChange(event){
    temp = event.target.value
  }
  function handleClick(){
    setCity(temp)
  }
  return (
    <div class="form">
      <h3 style = {{color:"white"}}> Enter City Name</h3>
      <Form.Control size="lg" type="text" placeholder="E.g Srinagar" onChange={handleChange}/>
      <Button name = "Check" onClick = {handleClick}/>
      <p>{city}</p>
    </div>
  );
}

export default InputSizesExample;
