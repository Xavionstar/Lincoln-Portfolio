import homeBg from "./assets/homepage_bgImage.jpg";



function Homepage() {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      
      backgroundSize: "cover",
      backgroundPosition: "center",
    }} >    

<p style={{
      color: "black",
      fontSize: "70px",
      fontWeight: "bold",
      textAlign: "center",
      paddingTop: "300px",
      paddingBottom: "100px",
      textShadow: "2px 2px 5px white"
    }} >DIVE INTO MY PORTFOLIO!</p>
    </div>

    
  );
}

export default Homepage;