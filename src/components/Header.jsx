import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <nav className="nav">
        <div className="left">
          <Link to="/" className="links">
            <img
              className="logo"
              title="Home"
              alt="Home"
              src="/images/mainLogo.png"
            />
          </Link>
        </div>
        <div className="right">
        <Link to="/about" className="links">
            <button className="button-75">
              <span className="text">About</span>
            </button>
          </Link>
          <Link to="/projects" className="links">
            <button className="button-75">
              <span className="text">Projects</span>
            </button>
          </Link>
          <Link to="/contact" className="links">
            <button className="button-75">
              <span className="text">Contact</span>
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
