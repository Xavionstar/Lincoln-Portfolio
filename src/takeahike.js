import React from 'react';
import Card from 'react-bootstrap/Card';
import takeAHikePic from "./assets/takeahikepic.png";

//this is the take a hike component. It will render the take a hike card on the take a hike page with links to the deployed app and the repo
function Takeahike() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={takeAHikePic} />
        <Card.Body>
          <Card.Title className="text-center fw-bold" >If you love hiking, you should: <a href="https://takeahike-bootcamp.herokuapp.com/">Take A Hike!</a> </Card.Title>
          <Card.Title></Card.Title>
          <Card.Text>
            Take a hike is a blog site that allows avid PNW outdoor and hiking enthusiasts to post about their favorite hikes. Users can sign up, make a profile, rank hikes  they've gone on and also comment on other users posts.
          </Card.Text>
          <a className="btn btn-primary" href="https://github.com/Xavionstar/Take-A-Hike" role="button">Visit the Repo!</a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Takeahike;