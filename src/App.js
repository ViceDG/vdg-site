import "./App.css";
// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <div className="bgdarken">
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Footer />
        <iframe
          title="background"
          id="myVideo"
          src="https://streamable.com/e/ngaw1f?autoplay=1&nocontrols=1"
          frameborder="0"
          width="1920px"
          height="1080px"
          allowfullscreen
          allow="autoplay"
        ></iframe>

      </div>
    </div>
  );
}

export default App;
