import { BsCalendar2Date } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import Resume from "../../assets/resume/DavidJinResume.pdf";
import "./about.scss";

const About = ({ menu }) => {
  Aos.init({ duration: 1000 });
  return (
    <section className={`about ${menu && "open"}`}>
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text">
                <h3 data-aos="fade-in">
                  I'm David Jin, a <span>Full-Stack / Web Developer</span>
                </h3>
                <p data-aos="fade-in">
                  Senior Full Stack and Blockchain Developer with over 8 years
                  of experience in building robust, scalable, and secure web and
                  blockchain applications. Proficient in MERN, MEAN, Laravel,
                  and Python, with a strong understanding of front-end and
                  back-end technologies. Skilled in Solidity and Rust for smart
                  contract development and experienced in integrating blockchain
                  solutions into web applications. Proven ability to lead and
                  collaborate with cross-functional teams to deliver complex
                  projects on time and within budget. Passionate about exploring
                  new technologies and continuously improving skills to drive
                  innovation and create value for clients and stakeholders.
                </p>
              </div>
            </div>
            <div className="row" data-aos="fade-in">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Alias : <span>David</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      GitHub : <span>https://github.com/DevSmith0213</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Email : <span>davidbusiness0520@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Degree : <span>Bachelor in Computer Science</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Certifications : <span>Full Stack Developer</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Phone : <span>+86 (152) 3367 1391</span>
                    </p>
                  </div>
                </div>
                <div className="row" data-aos="fade-in">
                  <div className="buttons">
                    <a
                      href={Resume}
                      download
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item" data-aos="fade-in">
                    <h3>ReactJS / NextJS</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "95%" }} />
                      <div className="skill-percent">95%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>React Native / Flutter</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "90%" }} />
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>NodeJS / ExpressJS / Django / Laravel</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "90%" }} />
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>Web3.js / Ethers.js</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "80%" }} />
                      <div className="skill-percent">80%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>Tailwind / MaterialUI</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "95%" }} />
                      <div className="skill-percent">95%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education padd-15" data-aos="fade-in">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>Oct 2020 - Present</i>
                        </h3>
                        <h4 className="timeline-title">
                          Lead Full Stack developer (Part time) @ CannaGo,
                          Atlanta Geogria US
                        </h4>
                        <p className="timeline-text">
                          This platform is an online e-commerce platform for
                          cannabis. There are three kinds of users like
                          dispensaries, consumers, and drivers.
                        </p>
                        <p className="timeline-text">
                          -I've used React Native using typescript for consumer
                          mobile application, and implemented native modules for
                          Authorized payment gateway and Geolocation functions,
                          Java module for Android, and Object-C for iOS. And
                          I've also implemented Onesignal api for the
                          notification function as well.
                        </p>
                        <p className="timeline-text">
                          -Backend: Node.js, Express.js, Firebase
                          Firestore(Database).
                        </p>
                        <p className="timeline-text">
                          -Google Map API for geolocation, Nodemailer for email
                          functions.
                        </p>
                        <p className="timeline-text">
                          -One signal for Notification and SMS.
                        </p>
                        <p className="timeline-text">
                          - Implemented automated testing and CI/CD processes to
                          improve code quality and performance.
                        </p>
                        <p className="timeline-text">
                          - Maintained codebase with version control using Git
                          and GitHub.
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>Aug 2021 - May 2023</i>
                        </h3>
                        <h4 className="timeline-title">
                          Lead Frontend || Web3 Developer @ Sombra Network, New
                          York, US
                        </h4>
                        <p className="timeline-text">
                          Sombra project is including NFT marketplace and NFT
                          mint and staking and so on. For this project, I've
                          used the following technologies.
                        </p>
                        <p className="timeline-text">
                          -Network: Ethereum, Binance smart chain.
                        </p>
                        <p className="timeline-text">
                          -Smart contract: Solidity, hardhat
                        </p>
                        <p className="timeline-text">
                          -Frontend(Dapp): React.js, Next.js, Redux, Redux
                          toolkit, Web3.js, Ethes.js
                        </p>
                        <p className="timeline-text">
                          -Backend: Moralis, Moralis cloud function, Moralis
                          Mongodb database.
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>May 2021 - Jan 2022</i>
                        </h3>
                        <h4 className="timeline-title">
                          Senior Mobile App Developer @ ECGO, Atlanta Geogria US
                        </h4>
                        <p className="timeline-text">
                          This project is for recycling items. <br />
                          Users can scan any items such as plastic, wood, or
                          paper using a mobile app, and identify whether that
                          material is reusable or not. So users can get rewards
                          for the items they uploaded using this mobile app.
                        </p>
                        <p className="timeline-text">
                          -I've worked as a Mobile app developer using React
                          Native. This was a challenge for me because I have to
                          develop a native module for scanning items. I used
                          Python and object-C for the scanning module and
                          developed from scratch to deploy.
                        </p>
                        <p className="timeline-text">
                          -Backend: Python Django, Mysql database, Restful API.
                        </p>
                        <p className="timeline-text">
                          -ML, Python, Amazon computer vision API. Amazon Web
                          service.
                        </p>
                      </div>
                    </div>
                    ß
                  </div>
                </div>
              </div>
              <div className="experience padd-15" data-aos="fade-in">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>Jan 2020 - Sep 2021</i>
                        </h3>
                        <h4 className="timeline-title">
                          Web3 || Smart Contract Developer @ Vite Labs Limited,
                          San Francisco California US
                        </h4>
                        <p className="timeline-text">
                          I've worked as a blockchain developer at this company.
                        </p>
                        <p className="timeline-text">
                          My main role was smart contract and web3 developer.
                        </p>
                        <p className="timeline-text">
                          Main skill stacks: solidify, Truffle, web3.js,
                          ethereum network
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>Jan 2016 - Dec 2019</i>
                        </h3>
                        <h4 className="timeline-title">
                          Full Stack Developer @ Upwork, US
                        </h4>
                        <p className="timeline-text">
                          - I've worked as freelancer in this platform.
                        </p>
                        <p className="timeline-text">
                          - I've developed so many projects for several clients.
                        </p>
                        <p className="timeline-text">Main skill sets:</p>
                        <p className="timeline-text">
                          -Frontend: React, React Native, Vue, Angular, HTML,
                          CSS, Javascript, Typescript, Flutter
                        </p>
                        <p className="timeline-text">
                          -Backend: Node, Express, Python Django, PHP Laravel.
                        </p>
                        <p className="timeline-text">
                          -Third party: Amazon Web Service, Google Cloud
                          Platform, Microsoft Azure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
