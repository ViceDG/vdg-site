import AboutData from "../data/about.json";

const Home = (props) => {
  return (
    <div className="homeContainer">
      <img className="main-logo" src={AboutData.logo} alt="Main Logo" />
      <div className="mainContent">
        <div className="buzz">
          <h1>FAST</h1>
          <h1>Efficient</h1>
          <h1>Forward</h1>
        </div>
        <p className="bio">{AboutData.bio}</p>
        <a href="/contact"><button className="startButton">Get Started</button></a>
        <br />
      </div>
    </div>
  );
};

export default Home;
