import React from 'react';
import Card from 'react-bootstrap/Card';
import techScreenShot from "./assets/techscreenshot.png";


function Technicallyspeaking() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={techScreenShot} />
        <Card.Body>
          <Card.Title className="text-center fw-bold fs-4" ><a href="https://rocky-mesa-12977.herokuapp.com/">Technically Speaking</a></Card.Title>
          <Card.Title></Card.Title>
          <Card.Text>
           Technically Speaking is a blog site for tech lovers to talk about their favorite aspects of technology. Users can sign up, make a profile, and also comment on other users posts.
          </Card.Text>
          <a className="btn btn-primary" href="https://github.com/Xavionstar/Technically-Speaking" role="button">Visit the Repo!</a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Technicallyspeaking;