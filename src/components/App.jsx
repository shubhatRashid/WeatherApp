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
  useEffect(() => {
    fetch('http://api.weatherapi.com/v1/current.json?key=ef32b14b621b485abbc80735231705&q=Srinagar')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);
  const imageUrl = data ?JSON.stringify(data.current.condition.icon):"loading..."
  return (
    <div>
      <Header />
      <Container fluid >
          <Row>

            <Col>
              <ForM />
            </Col>

            <Col>
                <div class = "form">
                  <Image src={imageUrl} fluid />
                </div>
            </Col>

            <Col>
            <ul class = "form">
              <p>City : {data ?JSON.stringify(data.location.name) +JSON.stringify(data.location.region):"loading..."} </p>
              <p>Region : {data ?JSON.stringify(data.location.region):"loading..."} </p>
              <p>Country: {data ?JSON.stringify(data.location.country) +JSON.stringify(data.location.region):"loading..."} </p>
              <p>Temperature (celcius) : {data ?JSON.stringify(data.current.temp_c):"loading..."} </p>
              <p>Temperature (ferenheit): {data ?JSON.stringify(data.current.temp_f):"loading..."} </p>
              <p>Current Conditions: {data ?JSON.stringify(data.current.condition.text):"loading..."} </p>
            </ul>
            </Col>

          </Row>
      </Container>
    </div>

    
  );
}

export default App;
