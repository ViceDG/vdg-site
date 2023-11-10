import AboutData from "../data/about.json";

const Home = (props) => {
  return (
    <div className="homeContainer">
      <img className="main-logo" src={AboutData.logo} alt="Main Logo" />
      <div className="mainContent">
        <h1 className="buzz"><i>FAST EFFICIENT RELIABLE</i></h1>
        <p className="bio">{AboutData.bio}</p>
        <a href="/contact">
          <button className="startButton">Get Started</button>
        </a>
        <br />
      </div>
    </div>
  );
};

export default Home;
