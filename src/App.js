import Header from "./header";
import Footer from "./footer";
import Homepage from "./homepage";
import React, { useState } from "react";
import {Route, Routes} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Skills from "./skills";
import Foodle from "./foodle";
import TakeAHike from "./takeahike";

function App() {
  return (
    <div  className="d-flex flex-column min-vh-100 ">
      <Container className="flex-grow-1 bg-success-subtle px-0">
        <Header />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/foodle" element={<Foodle />} />
          <Route path="/takeahike" element={<TakeAHike />} />
        </Routes>
      </Container>

      <Container className=" bg-success-subtle px-0">
        <Footer />
      </Container>
    </div>
  );
}

export default App;
