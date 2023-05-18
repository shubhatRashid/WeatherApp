import React, { useState, useEffect } from 'react';
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

  function getCity(city){
    setCityName(city)
    apiData(city)
  }

  function apiData(city) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.weatherapi.com/v1/current.json?key=ef32b14b621b485abbc80735231705&q='+city);
    xhr.onload = function() {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }
  
  
  return (
    <div>
      <Header />
      <Container fluid >
          <Row>

            <Col>
              <ForM getCity = {getCity}/>
            </Col>

            <Col>
                <div class = "form">
                  <Image src="C:\Users\Junaid Rashid\PycharmProjects\react-weather-app\public\images\Patchy.png" fluid />
                </div>
            </Col>

            <Col>
            <ul class = "form">
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
    </div>

    
  );
}

export default App;
