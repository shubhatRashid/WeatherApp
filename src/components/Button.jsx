import Button from "react-bootstrap/Button"
import "../styles.css";
  function ExampleButton(props){
    return <Button className="w-100" variant="light" onClick={props.onClick}>{props.name}</Button>
  }
export default ExampleButton
