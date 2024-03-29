import React, { useState} from 'react';
import "../styles.css";
import Header from "./header.jsx"
import Footer from "./Footer.jsx"
import ForM from "./Form.jsx"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function App() {
  const [data, setData] = useState(null);
  var [cityName,setCityName] = React.useState("Srinagar")
  const [clicked,setClick] = useState(false)

  function getCity(city){
    setCityName(city)
    apiData(city)
  }

  function apiData(city) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}`+city);
    xhr.onload = function() {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
        setClick(true)
      }else{
        console.log(xhr.status)
      }
    };
    xhr.send();
  }
  var url = data ?data.current.condition.icon:"..."
  return (
    <div>
      <Header/>
      <Container fluid  className='detailCol'>
          <Row className='row'>

            <Col>
              <ForM getCity = {getCity}/>
            </Col>

            <Col style={{display:clicked?"block":"none"}}>
                <div class = "imageCol">
                  <Image class = "skyImage" src={url} fluid />
                  <p>Current Conditions: {data ?JSON.stringify(data.current.condition.text):"loading..."} </p>
                </div>
            </Col>

            <Col style={{display:clicked?"block":"none"}}>
            <ul class = "detail">
              <p>City : {data ?JSON.stringify(data.location.name):"loading..."} </p>
              <p>Region : {data ?JSON.stringify(data.location.region):"loading..."} </p>
              <p>Country: {data ?JSON.stringify(data.location.country) :"loading..."} </p>
              <p>Current Conditions: {data ?JSON.stringify(data.current.condition.text):"loading..."} </p>
              <p>Temperature  : {data ?JSON.stringify(data.current.temp_c):"loading..."} </p>
              <p>Feels Like: {data ?JSON.stringify(data.current.feelslike_c):"loading..."} </p>
              <p>Humidity(%): {data ?JSON.stringify(data.current.humidity):"loading..."} </p>
              <p>precepitation(in): {data ?JSON.stringify(data.current.precip_in):"loading..."} </p>

            </ul>
            </Col>

          </Row>
      </Container>
      <Footer />
    </div>

    
  );
}

export default App;
