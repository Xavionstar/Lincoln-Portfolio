import Header from "./header";
import Footer from "./footer";
import Homepage from "./homepage";
import React, { useState } from "react";
import {Route, Routes} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Skills from "./skills";
import Foodle from "./foodle";
import TakeAHike from "./takeahike";
import Contact from "./contact";
import Weatherapp from "./weatherapp";
import Technicallyspeaking from "./technicallyspeaking";
import Dailygrind from "./dailygrind";
import Mytwocents from "./MyTwoCents";

function App() {
  //The app function will render the header, footer, and the routes for the different pages.
  //the routes will render the different pages based on the url path
  //header and footer will be rendered on every page because they are outside of the routes and therefore static

  return (
    <div  className="d-flex flex-column min-vh-100 ">
      <Container className="flex-grow-1 bg-success-subtle px-0">
        <Header />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
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
