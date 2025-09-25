import { useRef, useEffect } from "react";
import { FaAngellist, FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";
import Typed from "typed.js";
import "./home.scss";
// import logo from "../../assets/images/BudTab.png";
import logo from "../../assets/images/david.jpg";
import BgCanvas from "../bg-canvas/BgCanvas";

const Home = ({ menu }) => {
  const mouseDown = useRef(false);
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Software Engineer", "3D Web Developer", "Creative Technology Developer", "Mobile App Developer"], // Strings to display
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
              href="https://github.com/davidjin422"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/davidjin0213"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram className="react-icon" />
            </a>
          </li>
        </ul>
        <div className="container">
          <div className="row">
            <div className="home-info padd-15">
              <h3 className="hello">
                Hey there, I'm <span className="name">DongZhen Jin</span>
              </h3>
              <h3 className="my-profession">
                I'm a <span className="typing" ref={el} />
              </h3>
              <p>
                I am a creative Full-Stack Software Engineer with 8+ years of experience 
                building immersive web experiences, mobile applications, and innovative 
                digital solutions. Specialized in modern frontend frameworks (React, Next.js, 
                Vue.js, Nuxt.js), 3D web development with Three.js, and cross-platform 
                mobile development with React Native. Passionate about creating engaging 
                user experiences through interactive 3D graphics, AI-powered features, 
                and cutting-edge web technologies.
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
