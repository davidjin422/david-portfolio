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
import Modal from "../modal/Modal";

const Portfolio = ({ menu }) => {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const currentProjectRef = useRef(undefined);
  Aos.init({ duration: 1000 });

  const projects = useRef([
    {
      name: "Anonymous cross-chain token swap platform",
      description:
        "This is ",
      techs: ["React & Redux", "Web3", "MaterialUI"],
      image: img0,
      linkToLiveVersion: "https://houdiniswap.com",
      // linkToSource: "https://github.com",
    },
    {
      name: "Kryptomon Marketplace",
      description:
        "This web application is a NFT marketplace where users can buy, sell, breed KMON NFT and can create(mint) another KMON which has better property. And once they get better KMON, they can play games with it.",
      techs: ["React & Redux", "Web3"],
      image: img1,
      linkToLiveVersion: "https://market.kryptomon.co",
      // linkToSource: "https://github.com",
    },
    {
      name: "Futuralink(DEX)",
      description:
        "Futuralink is a web application where users can stake, swap FFT and get rewarded in your choice of rewards, but you have the opportunity to automatically reinvest and compound your earnings. Futura is a true passive income generator! It supports secured escrow platform as well.",
      techs: [
        "React & Redux",
        "MaterialUI",
        "Web3",
        "Smart Contract",
        "PancakeSwap",
      ],
      image: img2,
      linkToLiveVersion: "https://futuralink.futurafinance.io",
      // linkToSource: "https://github.com/",
    },
    {
      name: "ANC",
      description:
        "ANC is a collectible NFT project that includes 2222 unique apes. An ambitious vision developed to unite the metaverse through positive energy and good vibes only.",
      techs: ["React", "SCSS", "Tailwind"],
      image: img3,
      linkToLiveVersion: "https://apenightclub.io/",
      // linkToSource: "https://github.com/",
    },
    {
      name: "NICHO NFT marketplace",
      description:
        "Nicho NFT has a feature-rich and easy-to-use multi-integration NFT marketplace to let users easily step into the world of WEB 3.0. For sure, Nicho will reward all users who create NFT collections here!",
      techs: ["React & Redux", "SCSS", "Web3", "Moralis", "Node"],
      image: img4,
      linkToLiveVersion: "https://nichonft.com",
      // linkToSource: "https://github.com/",
    },
    {
      name: "EARTHIUM",
      description:
        "Earthium is a real-time strategy game in which you can earn money, crypto and NFTs by trading land, finding treasures and building businesses. We like to extend a warm welcome to you!",
      techs: ["React", "Emotion", "Web3"],
      image: img5,
      linkToLiveVersion: "https://earthium.io/",
      // linkToSource: "https://github.com/",
    },
    {
      name: "Lucky BNB",
      description:
        "Every buy and sell of $LBNB provides 2.4% to our sweepstakes prize pool. The winning wallet is randomly chosen by the smart contract every six hours. The accumulated prize pool automatically pays out in BNB tokens immediately during the draw.",
      techs: ["React", "Styled-Components", "Web3", "Smart Contract"],
      image: img6,
      linkToLiveVersion: "https://lbnb.io/",
      // linkToSource: "https://github.com/",
    },
    {
      name: "Sports Prediction",
      description:
        "This is a platform where users can predict which team will win the game in various sports like football, tenis, basketball and boxing & UFC. You can bet with BNB/MUFT/MSWAP. There are several competitions like Premier League, UCL, UEFA, Worldcup2022 etc.",
      techs: [
        "React & Redux",
        "Moralis",
        "Web3",
        "PancakeSwap",
        "Smart Contract",
      ],
      image: img7,
      linkToLiveVersion: "https://sp.muftswap.exchange",
      // linkToSource: "https://github.com/",
    },
    {
      name: "Ecommerce platform",
      description:
        "This is a online ecommerce platform where users can purchase products, upload their products to public store as a sub-store manager, can get delivered as well.",
      techs: ["React", "Firebase", "Styled-Components"],
      image: img8,
      linkToLiveVersion: "https://trycannago.com/",
      // linkToSource: "https://github.com/",
    },
    {
      name: "SinsOfShadow",
      description:
        "Sombra Network.",
      techs: ["React & Redux", "Web3", "Moralis"],
      image: img9,
      linkToLiveVersion: "https://sinsofshadow.io/",
      // linkToSource: "https://github.com/",
    },
    {
      name: "Sombra Network",
      description:
        "Sombra Network.",
      techs: ["React & Redux", "Web3", "Moralis"],
      image: img10,
      linkToLiveVersion: "https://www.sombranetwork.io/",
      // linkToSource: "https://github.com/",
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
                  currentFilter === "Web3" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                Web3
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "React & Redux"
                    ? "filter-active"
                    : "list-item"
                }`}
                onClick={setFilter}
              >
                React & Redux
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "Moralis" ? "filter-active" : "list-item"
                }`}
                onClick={setFilter}
              >
                Moralis
              </button>
              <button
                type="button"
                className={`${
                  currentFilter === "Styled-Components"
                    ? "filter-active"
                    : "list-item"
                }`}
                onClick={setFilter}
              >
                Styled-Components
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
