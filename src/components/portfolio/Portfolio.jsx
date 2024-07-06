import "./portfolio.css";

import IMG1 from "../../assets/e-commerece store.JPG";
import IMG2 from "../../assets/redux management.JPG";
import IMG4 from "../../assets/my-portfolio.JPG";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "e-commerece website with React.js",
      img: IMG1,
      description:
        "An e-commerece store website is a huge interactive designs to present various types of clothes for male and female.",
      // technologies: "Html | CSS | Javascript | React Js",
      link: "https://revenstore.netlify.app",
      github: "https://github.com/WaseemRevin/week-3-E-Commerce-website.git",
    },
    {
      id: 2,
      title: "My Portfolio",
      img: IMG4,
      description:
        "A personal Porfolio website as a front-end developer",
      technologies: "HTML | CSS | JavaScript ",
      link: "https://waseemreven-portfolio.netlify.app",
      github: "https://github.com/WaseemRevin/Portfolio.git",
    },
    {
      id: 3,
      title: "Redux Management System",
      img: IMG2,
      description: "A Redux Management app by using Redux and contextAPI . full responsive website with PWA(Progressive Web APP)",
      technologies: "React.js | JavaScript | Redux ",
      link: "https://whimsical-tanuki-5dca8e.netlify.app",
      github: "https://github.com/WaseemRevin/Redux-PWA.git",
    },
    
   

  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
