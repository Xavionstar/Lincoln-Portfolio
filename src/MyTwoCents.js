import React from 'react';
import Card from 'react-bootstrap/Card';
import myTwoCents from "./assets/mytwocents.png";


function Mytwocents() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={myTwoCents} />
        <Card.Body>
          <Card.Title className="text-center fw-bold fs-4" >My Two Cents</Card.Title>
          <Card.Title></Card.Title>
          <Card.Text>
           My Two Cents is a back end database using mongoose, mongodb, and express to add users and their thoughts to a database. Users can also add friends and see what their friends are thoughts are and react to them. This may become a full project in the very near future!
          </Card.Text>
          <a className="btn btn-primary" href="https://github.com/Xavionstar/My-Two-Cents" role="button">Visit the Repo!</a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Mytwocents;