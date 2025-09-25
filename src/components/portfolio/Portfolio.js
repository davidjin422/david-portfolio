import React, { useState, useRef } from "react";
import "./portfolio.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import img0 from "../../assets/images/0.jpg";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";
import img8 from "../../assets/images/8.jpg";
import img9 from "../../assets/images/9.png";
import img10 from "../../assets/images/10.png";
import sombra2 from "../../assets/images/sombra2.jpg";
import birdingvoyage from "../../assets/images/bird.jpg";
import aatlas from "../../assets/images/Aatlas.jpg";
import vacaysharing from "../../assets/images/vacay.jpg";
import sombra from "../../assets/images/somb.jpg";
import hiwrite from "../../assets/images/hiwrite.jpg";
import muslim from "../../assets/images/muslim.jpg";
import sos from "../../assets/images/sos.jpg";
import healthnutrition from "../../assets/images/health.jpg";
import Modal from "../modal/Modal";

const Portfolio = ({ menu }) => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const currentProjectRef = useRef(undefined);
  Aos.init({ duration: 1000 });

  const projects = useRef([
    {
      name: "Sombra Labs - Creative Technology Studio",
      description:
        "A cutting-edge creative technology studio website featuring immersive Three.js 3D experiences, interactive animations, and modern web design. Showcases selected works including Toxic Twilights, Etrade Superbowl, Pokemon Go, Swarovski, Louis Vuitton, and NFL NFT projects. Features dynamic 3D models, smooth animations, and responsive design across all devices.",
      techs: ["Three.js", "React", "WebGL", "3D Animation", "Creative Design"],
      image: sombra2,
      linkToLiveVersion: "https://sombra-labs-video.netlify.app/",
      // linkToSource: "https://github.com",
    },
    {
      name: "Birding Voyage",
      description:
        "A comprehensive birding platform built with React/Next.js and Supabase, designed for bird enthusiasts to discover, track, and share their birding experiences. Features include interactive bird identification, location-based bird spotting, user profiles, and community features for sharing sightings and photos.",
      techs: ["React", "Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
      image: birdingvoyage,
      linkToLiveVersion: "https://birdingvoyage.com/",
      // linkToSource: "https://github.com",
    },
    {
      name: "Aatlas - Life Story Platform",
      description:
        "A comprehensive life story documentation platform that helps users create, celebrate, and share personal narratives. Features include interactive timelines, location mapping, collaborative memory collection, and rich multimedia support. Built with Vue.js frontend, Golang backend, Stripe payment integration, and deployed on Google Cloud Platform with Cloudflare CDN for optimal performance and global reach.",
      techs: ["Vue.js", "Golang", "Stripe", "Google Cloud Platform", "Cloudflare"],
      image: aatlas,
      linkToLiveVersion: "https://aatlas.com/",
      // linkToSource: "https://github.com",
    },
    {
      name: "VacaySharing - Luxury Property Sharing Platform",
      description:
        "A sophisticated Croatian luxury property sharing platform that enables fractional ownership of premium vacation homes. Features include property portfolio management, flexible booking systems, revenue sharing, and comprehensive property management tools. Built with Next.js frontend, Nest.js backend, PostgreSQL database, and Stripe payment processing for seamless property investment and rental management.",
      techs: ["Next.js", "Nest.js", "PostgreSQL", "Stripe", "TypeScript"],
      image: vacaysharing,
      linkToLiveVersion: "https://vacaysharing.com/",
      // linkToSource: "https://github.com",
    },
    {
      name: "Sombra Website - Interactive 3D Experience",
      description:
        "An immersive 3D website built with Next.js and Three.js, featuring interactive animations, smooth transitions, and modern web design. Showcases advanced 3D web development techniques with responsive design and optimized performance. The site demonstrates expertise in WebGL, 3D modeling, and modern React patterns for creating engaging user experiences.",
      techs: ["Next.js", "Three.js", "WebGL", "3D Animation", "TypeScript"],
      image: sombra,
      linkToLiveVersion: "https://sombra-website.vercel.app/",
      // linkToSource: "https://github.com",
    },
    {
      name: "Hiwrite - AI-Powered Highlighter",
      description:
        "A Chrome extension designed for visual learners and neurodiverse thinkers, featuring AI-powered highlighting, color-coded organization, and intelligent content analysis. Built with React frontend and Golang backend, the extension helps users organize, recall, and expand their knowledge through customizable highlighting, AI-generated tags, and interactive chat features for enhanced learning and productivity.",
      techs: ["Chrome Extension", "Golang", "React", "AI Integration", "TypeScript"],
      image: hiwrite,
      linkToLiveVersion: "https://hiwrite.ai/",
      // linkToSource: "https://github.com",
    },
    {
      name: "Proposal - Muslim Marriage & Wedding App",
      description:
        "A comprehensive Muslim marriage and wedding planning mobile app built with React Native, featuring AI-powered compatibility matching, 48-hour expiring matches, in-person events, and wedding vendor marketplace. The app includes advanced safety features, guardian integration, verified profiles, and faith-based matchmaking through local masjids. Built with Node.js backend and PostgreSQL database for secure user data management and real-time messaging.",
      techs: ["React Native", "Node.js", "PostgreSQL", "AI Matching", "Mobile App"],
      image: muslim,
      linkToLiveVersion: "https://apps.apple.com/us/app/proposal-muslim-dating-app/id1398445547",
      // linkToSource: "https://github.com",
    },
    {
      name: "SOS Teacher Agency - Education Management App",
      description:
        "A comprehensive mobile app for teacher placement and school communication built with React Native (Expo), featuring real-time placement management, calendar integration, and secure messaging. The app enables teachers to manage placements, update availability, and communicate with schools, while schools can search teachers, send messages, and submit placement requests. Built with Golang backend and PostgreSQL database for robust data management and real-time notifications.",
      techs: ["React Native", "Expo", "Golang", "PostgreSQL", "Mobile App"],
      image: sos,
      linkToLiveVersion: "https://apps.apple.com/us/app/sos-teacher-agency/id6743743054",
      // linkToSource: "https://github.com",
    },
    {
      name: "Health Nutrition - Wellness Community Platform",
      description:
        "A comprehensive health and wellness community platform built with Vue.js/Nuxt.js frontend and Nest.js backend, featuring discussion forums, product reviews, magazine content, and user profiles. The platform enables users to share health experiences, review supplements and products, participate in challenges, and access expert content. Built with PostgreSQL database for robust data management, user authentication, and content organization with real-time discussions and community features.",
      techs: ["Vue.js", "Nuxt.js", "Nest.js", "PostgreSQL", "Community Platform"],
      image: healthnutrition,
      linkToLiveVersion: "https://healthnutrition.com",
      // linkToSource: "https://github.com",
    },
    {
      name: "Anonymous cross-chain token swap platform",
      description:
        "This is ",
      techs: ["React & Redux", "Web3", "MaterialUI"],
      image: img9,
      linkToLiveVersion: "https://houdiniswap.com",
      // linkToSource: "https://github.com",
    },
    {
      name: "Kryptomon Marketplace",
      description:
        "This web application is a NFT marketplace where users can buy, sell, breed KMON NFT and can create(mint) another KMON which has better property. And once they get better KMON, they can play games with it.",
      techs: ["React & Redux", "Web3"],
      image: img10,
      linkToLiveVersion: "https://market.kryptomon.co",
      // linkToSource: "https://github.com",
    },
  ]);

  const setFilter = (e) => {
    setCurrentFilter(e.target.textContent);
  };

  const openModal = (current) => {
    currentProjectRef.current = current;
    setShowModal(true);
  };

  let filtered = [];

  if (currentFilter === "All") {
    filtered = projects.current;
  } else if (currentFilter === "React / Next.js") {
    filtered = projects.current.filter((project) =>
      project.techs.some(tech => 
        tech === "React" || 
        tech === "Next.js" || 
        tech === "React & Redux" ||
        tech.includes("React")
      )
    );
  } else {
    filtered = projects.current.filter((project) =>
      project.techs.includes(currentFilter)
    );
  }

  return (
    <>
      <section className={`portfolio ${menu && "open"}`}>
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-heading padd-15">
              <h2>My Latest Projects: </h2>
            </div>
          </div>
          <div className="projects">
            <div className="project-filter">
              <button
                type="button"
                className={`${
                  currentFilter === "All" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                All
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "Three.js" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                Three.js
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "Web3" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                Web3
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "React / Next.js" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                React / Next.js
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "Vue.js" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                Vue.js
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "Golang" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                Golang
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "Nest.js" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                Nest.js
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "Chrome Extension" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                Chrome Extension
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "Mobile App" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                Mobile App
              </button>
      
            </div>
            <div className="projects-row">
              {filtered?.map((pro) => (
                <div key={pro.name} className="portfolio-item padd-15">
                  <div
                    data-aos="fade-right"
                    className="portfolio-item-inner shadow-dark"
                  >
                    <div className="portfolio-img">
                      <img src={pro.image} alt="" />
                    </div>
                    <h3>{pro.name}</h3>
                    <ul className="techs">
                      {pro.techs.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() => {
                        openModal(pro);
                      }}
                      className="btn project-button"
                    >
                      See Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        currentProject={currentProjectRef.current}
      />
    </>
  );
};

export default Portfolio;
