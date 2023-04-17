import React from 'react';
import Card from 'react-bootstrap/Card';
import dailyGrind from "./assets/daily-grind.png";


function Dailygrind() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={dailyGrind} />
      <Card.Title></Card.Title>
      <Card.Title></Card.Title>
      <Card.Title></Card.Title>
        <Card.Body>
          <Card.Title class="text-center fw-bold fs-4" ><a href="https://xavionstar.github.io/Daily-Grind/">Daily Grind</a></Card.Title>
          <Card.Title></Card.Title>
          <Card.Text>
           Daily Grind is a simple app using javascript, CSS and HTML that functions as a scheduler. Users can add events to their daily schedule and save them to local storage. The app also color codes events depending on if they are in the past or future. 
          </Card.Text>
          <a class="btn btn-primary" href="https://github.com/Xavionstar/Daily-Grind" role="button">Visit the Repo!</a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Dailygrind;