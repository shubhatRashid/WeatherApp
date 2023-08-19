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
      <Form.Control id = "myForm" size="lg" type="text" placeholder="Search City..." onChange={handleChange} value = {city}/>
      <Button name = "Check" onClick = {handleClick}/>
    </div>
  );
}

export default InputSizesExample;
