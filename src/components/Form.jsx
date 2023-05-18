import React from "react"
import Form from 'react-bootstrap/Form';
import Button from "./Button.jsx"
import "../styles.css";
function InputSizesExample(props) {
  var [city,setCity] = React.useState("")
  function handleChange(event){
    city = event.target.value
    setCity(event.target.value)
  }

  function handleClick(){
    props.getCity(city)
    setCity("")
  }
  return (
    <div class="form">
      <h3 style = {{color:"white"}}> Enter City Name</h3>
      <Form.Control id = "myForm" size="lg" type="text" placeholder="E.g Srinagar" onChange={handleChange} value = {city}/>
      <Button name = "Check" onClick = {handleClick}/>
    </div>
  );
}

export default InputSizesExample;
