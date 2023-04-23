import homeBg from "./assets/homepage_bgImage.jpg";


// this is the about me component. It will render the about me card with my profile picture and a short bio
function Homepage() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `url(${homeBg})`,
    }} className="d-flex flex-column min-vh-100">
    
    </div>
  );
}

export default Homepage;