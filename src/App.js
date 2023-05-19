import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import ReactGA from "react-ga";

ReactGA.initialize("UA-251050842-1");

function App() {
  const [menuState, setMenuState] = useState(false);

  const handleMenuState = () => {
    setMenuState((state) => !state);
  };
  const handleLinkClick = () => {
    setMenuState(false);
  };
  useEffect(() => {
    ReactGA.event({
      category: "portfolio",
      action: "visitPortfolio",
      label: "label",
    });
  }, []);

  return (
    <>
      <Header
        menu={menuState}
        handleHamburger={handleMenuState}
        handleLinkClick={handleLinkClick}
      />
      <Routes>
        <Route path="/" element={<Home menu={menuState} />} />
        <Route path="/About" element={<About menu={menuState} />} />
        <Route path="/Portfolio" element={<Portfolio menu={menuState} />} />
        <Route path="/Contact" element={<Contact menu={menuState} />} />
      </Routes>
    </>
  );
}

export default App;
