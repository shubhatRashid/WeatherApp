import Button from "react-bootstrap/Button"
import "../styles.css";
  function ExampleButton(props){
    return <Button variant="info" onClick={props.onClick}>{props.name}</Button>
  }
export default ExampleButton
