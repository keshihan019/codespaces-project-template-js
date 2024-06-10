/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Things To Know About MLSA Program 🎉",
    description:
      "Discover the essentials of the Microsoft Learn Student Ambassadors program! This beginner-friendly article will help you understand the program's benefits, how to apply, and how to leverage the Microsoft Learn platform to boost your career.",
    url: "https://dev.to/microsoft/10-things-to-know-about-microsoft-learn-student-ambassadors",
  },
  {
    title: "Understanding Cloud Computing: Key Concepts and Benefits ☁️",
    description:
      "Explore the fundamentals of cloud computing, including its core concepts, benefits, and different service models. This article provides a beginner-friendly introduction to how cloud computing can transform businesses and personal projects.",
    url: "https://dev.to/microsoft/understanding-cloud-computing-key-concepts-and-benefits",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://dev.to/microsoft/getting-started-with-azure-devops",
  },
  {
    title: "Getting Started with Azure DevOps 🚀",
    description:
      "Learn how to streamline your software development process using Azure DevOps. This guide covers the basics of setting up Azure DevOps, integrating it with your projects, and leveraging its powerful tools for continuous integration and delivery.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
