import selfie from "./assets/selfie.jpg";
import Card from 'react-bootstrap/Card';

// this is the about me component. It will render the about me card with my profile picture and a short bio
function Aboutme() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Card style={{
      boxShadow:'8px 8px 10px #000080',
     width: '25rem' }}>
      <Card.Img variant="top" src={selfie} />
      <Card.Body>
        <Card.Title>Lincoln's Profile</Card.Title>
        <Card.Text>
          I am a recent graduate of the University of Washington's Full Stack Web Development Bootcamp. I am a full stack web developer with a background in customer service and supply chain. I am a problem solver and a team player. I am looking for a position where I can use my skills to help a company grow and succeed.
        </Card.Text>
              
      </Card.Body>
    </Card>
    </div>
  );
}

export default Aboutme;