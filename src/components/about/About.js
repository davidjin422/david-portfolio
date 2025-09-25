import { BsCalendar2Date } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import Resume from "../../assets/resume/davidjin.pdf";
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
                  I'm DongZhen Jin, a <span>Full Stack Software Engineer</span>
                </h3>
                <p data-aos="fade-in">
                  Creative Full-Stack Developer with 8+ years of experience building immersive web experiences, 
                  mobile applications, and innovative digital solutions. Specialized in modern frontend frameworks 
                  (React, Next.js, Vue.js, Nuxt.js), 3D web development with Three.js, and cross-platform mobile 
                  development with React Native. Expert in backend technologies including Node.js, Golang, and 
                  Nest.js, with extensive experience in database design, payment integration (Stripe), and cloud 
                  deployment (GCP, Cloudflare). Passionate about creating engaging user experiences through 
                  interactive 3D graphics, AI-powered features, and cutting-edge web technologies. Proven track 
                  record of delivering complex projects from concept to deployment, including creative technology 
                  studios, e-commerce platforms, mobile apps, and Chrome extensions.
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
                      GitHub : <span>https://github.com/davidjin422</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Email : <span>devsmith0213@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Degree : <span>Master in Computer Science</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Certifications : <span>Full Stack Developer</span>
                    </p>
                  </div>
                  <div className="info-item padd-15" data-aos="fade-in">
                    <p>
                      Phone : <span>+86 155 2405 6790</span>
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
                    <h3>React / Next.js / Vue.js / Nuxt.js</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "95%" }} />
                      <div className="skill-percent">95%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>Three.js / WebGL / 3D Graphics</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "90%" }} />
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>React Native / Mobile Development</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "90%" }} />
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>Golang / Node.js / Nest.js</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "90%" }} />
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                  <div className="skill-item" data-aos="fade-in">
                    <h3>Chrome Extensions / AI Integration</h3>
                    <div className="progress">
                      <div className="progress-in" style={{ width: "85%" }} />
                      <div className="skill-percent">85%</div>
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
                          <i>May 2023 - Present</i>
                        </h3>
                        <h4 className="timeline-title">
                          Creative Technology Developer @ Sombra
                        </h4>
                        <p className="timeline-text">
                          Leading development of immersive 3D web experiences and creative technology solutions. 
                          Specialized in Three.js, WebGL, and modern web technologies for high-end creative projects.
                        </p>
                        <p className="timeline-text">
                          - Developed cutting-edge 3D websites featuring interactive animations and immersive user experiences
                        </p>
                        <p className="timeline-text">
                          - Technologies: Three.js, Next.js, WebGL, TypeScript, React
                        </p>
                        <p className="timeline-text">
                          - Created projects for major brands including NFL, Pokemon Go, Louis Vuitton, and Swarovski
                        </p>
                        <p className="timeline-text">
                          - Implemented advanced 3D modeling, animation systems, and performance optimization
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>Mar 2022 - Apr 2023</i>
                        </h3>
                        <h4 className="timeline-title">
                          Mobile App Developer @ SOS Teacher Agency
                        </h4>
                        <p className="timeline-text">
                          Developed a comprehensive mobile app for teacher placement and school communication 
                          using React Native (Expo), featuring real-time placement management and secure messaging.
                        </p>
                        <p className="timeline-text">
                          - Built teacher placement management system with calendar integration
                        </p>
                        <p className="timeline-text">
                          - Implemented secure messaging between teachers and schools
                        </p>
                        <p className="timeline-text">
                          - Developed real-time notifications and placement request system
                        </p>
                        <p className="timeline-text">
                          - Technologies: React Native, Expo, Golang, PostgreSQL, real-time APIs
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>May 2020 - Feb 2022</i>
                        </h3>
                        <h4 className="timeline-title">
                          Full-Stack Developer @ Aatlas
                        </h4>
                        <p className="timeline-text">
                          Developed a comprehensive life story documentation platform that helps users create, celebrate, 
                          and share personal narratives. Built with Vue.js/Nuxt.js frontend, Golang backend, and Stripe 
                          payment integration.
                        </p>
                        <p className="timeline-text">
                          - Built interactive timelines and location mapping features
                        </p>
                        <p className="timeline-text">
                          - Implemented collaborative memory collection and rich multimedia support
                        </p>
                        <p className="timeline-text">
                          - Deployed on Google Cloud Platform with Cloudflare CDN for optimal performance
                        </p>
                        <p className="timeline-text">
                          - Technologies: Vue.js, Nuxt.js, Golang, Stripe, GCP, Cloudflare
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
                          <i>Oct 2019 - Apr 2020</i>
                        </h3>
                        <h4 className="timeline-title">
                          Full-Stack Developer @ Health Nutrition
                        </h4>
                        <p className="timeline-text">
                          Developed a comprehensive health and wellness community platform with discussion forums, 
                          product reviews, and user engagement features.
                        </p>
                        <p className="timeline-text">
                          - Built with Vue.js/Nuxt.js frontend and Nest.js backend
                        </p>
                        <p className="timeline-text">
                          - Implemented PostgreSQL database for robust data management
                        </p>
                        <p className="timeline-text">
                          - Created real-time discussion forums and community features
                        </p>
                        <p className="timeline-text">
                          - Technologies: Vue.js, Nuxt.js, Nest.js, PostgreSQL, Community Platform
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot" />
                        <h3 className="timeline-date">
                          <BsCalendar2Date className="fa fa-calendar" />
                          <i>Oct 2016 - Mar 2019</i>
                        </h3>
                        <h4 className="timeline-title">
                          Full-Stack Developer @ Upwork (Freelancer)
                        </h4>
                        <p className="timeline-text">
                          Built diverse web applications and mobile solutions for clients across various industries, 
                          gaining extensive experience in modern web technologies and cloud platforms.
                        </p>
                        <p className="timeline-text">
                          - Frontend: React, Vue.js, Angular, TypeScript, HTML5, CSS3, JavaScript
                        </p>
                        <p className="timeline-text">
                          - Backend: Node.js, Express.js, Python Django, PHP Laravel, Golang
                        </p>
                        <p className="timeline-text">
                          - Cloud Platforms: AWS, Google Cloud Platform, Microsoft Azure, Cloudflare
                        </p>
                        <p className="timeline-text">
                          - Mobile: React Native, Flutter, cross-platform development
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
