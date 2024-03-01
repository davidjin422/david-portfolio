import { useRef, useEffect } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaAngellist, FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";
import Typed from "typed.js";
import "./home.scss";
// import logo from "../../assets/images/BudTab.png";
import logo from "../../assets/images/sandy2.png";
import BgCanvas from "../bg-canvas/BgCanvas";

const Home = ({ menu }) => {
  const mouseDown = useRef(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full-Stack Developer", "Web3 Developer", "Frontend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <BgCanvas mouseDown={mouseDown} />
      <section className={`home-section ${menu && "open"}`}>
        <ul className="social-links">
          <li>
            <a
              target="_blank"
              href="https://github.com/DevSmith0213"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/DevDavid0520"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram className="react-icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/david-jin-2786a2242/"
              rel="noreferrer"
            >
              <AiOutlineLinkedin />
            </a>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hey there, I'm <span className="name">David Jin</span>
              </h3>
              <h3 className="my-profession">
                I'm a <span className="typing" ref={el} />
              </h3>
              <p>
                I am an experienced, product-focused full-stack JavaScript
                Engineer - a true professional who loves to take ownership and
                responsibility across the entire stack! If you like what you see
                and have a project you need coded, don’t hestiate to contact me.
              </p>

              <button
                type="button"
                className="btn hire-me"
                onTouchStart={() => {
                  mouseDown.current = true;
                }}
                onTouchEnd={() => {
                  mouseDown.current = false;
                }}
                onMouseDown={() => {
                  mouseDown.current = true;
                }}
                onMouseUp={() => {
                  mouseDown.current = false;
                }}
              >
                Warp
              </button>
            </div>
            <div className="home-img padd-15">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
