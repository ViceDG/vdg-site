import AboutData from "../data/about.json";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="homeContainer">
      <img className="main-logo" src={AboutData.logo} alt="Main Logo" />
      <div className="mainContent">
        <h1 className="buzz">
          <i>FAST EFFICIENT RELIABLE</i>
        </h1>
        <p className="bio">{AboutData.bio}</p>

        <Link to="/contact" className="links">
          <button className="startButton">Get Started</button>
        </Link>
        <br />
      </div>
    </div>
  );
};

export default Home;
