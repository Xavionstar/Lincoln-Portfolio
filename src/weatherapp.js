import React from 'react';
import Card from 'react-bootstrap/Card';
import weatherAppPic from "./assets/weatherAppPic.png";

//this is the weather app component. It will render the weather app card on the weather app page with links to the deployed app and the repo
function Weatherapp() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={weatherAppPic} />
        <Card.Body>
          <Card.Title className="text-center fw-bold" ><a href="https://xavionstar.github.io/Weather-In-Any-US-City/">Weather</a> You're Ready or Not</Card.Title>
          <Card.Title></Card.Title>
          <Card.Text>
            Weather You're Ready or Not is a weather app that allows users to search for a city and get the current weather and a 5 day forecast. It also allows users to save their favorite cities to a list that they can access at any time.
          </Card.Text>
          <a className="btn btn-primary" href="https://github.com/Xavionstar/Weather-In-Any-US-City" role="button">Visit the Repo!</a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Weatherapp;