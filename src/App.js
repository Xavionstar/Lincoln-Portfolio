import Header from "./header";
import Footer from "./footer";
import Homepage from "./homepage";
import Aboutme from "./aboutme";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Skills from "./skills";
import Foodle from "./foodle";
import TakeAHike from "./takeahike";
import Contact from "./contact";
import Weatherapp from "./weatherapp";
import Technicallyspeaking from "./technicallyspeaking";
import Dailygrind from "./dailygrind";
import Mytwocents from "./MyTwoCents";
import underWater from "./assets/underwater_background.png";
import aboveWater from "./assets/homepage_bgImage.jpg";

function App() {
  //The app function will render the header, footer, and the routes for the different pages.
  //the routes will render the different pages based on the url path and the background image will change based on the current page
  //header and footer will be rendered on every page because they are outside of the routes and therefore static

  const [homepage, setHomepage] = useState(getHomePage(window.location.hash));

  const setBackgroudImage = (currentPath) => {
    setHomepage(getHomePage(currentPath));
  };

  function getHomePage(currentPath) {
    if (currentPath === "#/" || currentPath === "") {
      console.log("returned true");
      return true;
    } else {
      console.log("returned false");
      return false;
    }
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: homepage ? `url(${aboveWater})` : `url(${underWater})`,
      }}
      className="d-flex flex-column min-vh-100 "
    >
      <Container className="flex-grow-1 px-0">
        
        <Header setBackgroudImage={setBackgroudImage} />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/foodle" element={<Foodle />} />
          <Route path="/takeahike" element={<TakeAHike />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/weatherapp" element={<Weatherapp />} />
          <Route path="/technically" element={<Technicallyspeaking />} />
          <Route path="/dailygrind" element={<Dailygrind />} />
          <Route path="/mytwocents" element={<Mytwocents />} />
        </Routes>
      </Container>

      <Container className=" bg-success-subtle px-0">
        <Footer />
      </Container>
    </div>
  );
}

export default App;
