import React from 'react';
import Card from 'react-bootstrap/Card';
import foodlePic from "./assets/foodlePic.png";

//this is the foodle component. It will render the foodle card on the foodle page with links to the deployed app and the repo
function Foodle() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={foodlePic} />
        <Card.Body>
          <Card.Title class="text-center fw-bold fs-4" >Disrupt your Diet: <a href="https://xavionstar.github.io/Foodle/">Foodle!</a> </Card.Title>
          <Card.Title></Card.Title>
          <Card.Text>
            Foodle is an app that will filter local restaurants based on foods youve already eaten recently. Therefore you keep your diet fresh and exciting. Variety is the spice of life!
          </Card.Text>
          <a class="btn btn-primary" href="www.github.com/Xavionstar/Foodle" role="button">Visit the Repo!</a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Foodle;