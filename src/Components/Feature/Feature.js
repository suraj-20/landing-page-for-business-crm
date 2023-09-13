import React from "react";
import "./Feature.css";


import img1 from "../../Assets/ikea.jpg";
import img2 from "../../Assets/Google-Logo.wine.svg";
import img3 from "../../Assets/1280px-GoDaddy_logo.svg.png";
import img4 from "../../Assets/yahoo.svg";

const Feature = () => {
  return (
    <section className="featureSection">
      <div className="featuredinSection">
        <h3 className="featureHeading">Featured in</h3>
        <div className="companySection">
          <ul className="companyLogo grid">
            <li className="listItems">
              <img src={img1} alt="IKEA" />
            </li>
            <li className="listItems">
              <img src={img2} alt="google" />
            </li>
            <li className="listItems">
              <img src={img3} className="godaddyLogo" alt="godaddy" />
            </li>
            <li className="listItems">
              <img src={img4} alt="yahoo" />
            </li>
          </ul>
        </div>
      </div>

      
    </section>
  );
};

export default Feature;
