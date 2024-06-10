/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a dynamic third-year undergraduate majoring in Information Systems at Sabaragamuwa University of Sri Lanka, I bring a blend of academic prowess and practical experience to the table. My journey includes valuable stints as a Digital Marketing Intern at Commercial Technologies Plus and a Development Intern at International Youth Alliance for Peace, where I acquired hands-on insights into digital marketing strategies and project management principles. ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Business Coaching",
  "Graphic Designing",
  "Front End Developmentn",
  "Focus group testing",
  "Mobile user interfaces",
  "Personal Branding",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Moreover, I am deeply involved in community initiatives, serving as the Director of Akaram Makkal Kalaikoodam, an organization dedicated to promoting Tamil culture and traditions in Trincomalee, and as a Board Member of Thalam, a community-based organization focused on youth empowerment.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
