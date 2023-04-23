import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
function Skills() {
  //this function will render the skills page and also contain the progress bars styling for the skills
  //this also contains the resume download button to download my resume from the public folder
  return (
    <>
      <Container>
        <h1 className="text-center pt-5">Skills that I Have Acquired</h1>
        <p className="text-center">Download My <a className="btn btn-primary" href="/Lincoln-Portfolio/Resume.pdf" role="button">Resume</a></p>
      </Container>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <ListGroup>
          <p className="fs-3">Front End Proficiencies</p>
          <ListGroup.Item variant="info">
            HTML
            <div>
              <ProgressBar variant="success" animated now={90} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            CSS
            <div>
              <ProgressBar variant="success" animated now={80} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            Javascript
            <div>
              <ProgressBar variant="success" animated now={90} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            BootStrap
            <div>
              <ProgressBar variant="success" animated now={90} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            React
            <div>
              <ProgressBar variant="success" animated now={95} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            JQuery
            <div>
              <ProgressBar variant="success" animated now={80} />
            </div>
          </ListGroup.Item>
          
          <p className="fs-3">Back End Proficiencies</p>
          <ListGroup.Item variant="info">
            MongoDB
            <div>
              <ProgressBar variant="success" animated now={95} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            Express
            <div>
              <ProgressBar variant="success" animated now={90} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            MySQL
            <div>
              <ProgressBar variant="success" animated now={75} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            NodeJS
            <div>
              <ProgressBar variant="success" animated now={90} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            NoSQL
            <div>
              <ProgressBar variant="success" animated now={75} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            Progressive Web Apps
            <div>
              <ProgressBar variant="success" animated now={70} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            Mongoose
            <div>
              <ProgressBar variant="success" animated now={90} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item variant="info">
            GraphQL
            <div>
              <ProgressBar variant="success" animated now={75} />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default Skills;
