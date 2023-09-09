import React from "react";
import "./Feature.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";
import { GiProgression } from "react-icons/gi";
import { BiCalendar } from "react-icons/bi";
import { BsFileBarGraph } from "react-icons/bs";

import img1 from "../../Assets/ikea.jpg";
import img2 from "../../Assets/Google-Logo.wine.svg";
import img3 from "../../Assets/1280px-GoDaddy_logo.svg.png";
import img4 from "../../Assets/yahoo.svg";
import img5 from "../../Assets/img 6.png";
import img6 from '../../Assets/img7.png.jpg'

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

      <div className="featureSection2 flex">
        <div className="featureImg">
          <img src={img5} alt="FeatureImage" />
        </div>
        <div className="featureContent">
          <h1>Intuitive CRM to get you conversions</h1>
          <p>
            With intuitive features, making eiza CRM supeiror to many similar
            competitiors
          </p>
          <ul className="featureContentLinks grid">
            <li>
              <a href="#">
                <BsGraphUp className="icon" /> Track Progress
              </a>
            </li>
            <li>
              <a href="#">
                <GiProgression className="icon" /> Visual Sales
              </a>
            </li>
            <li>
              <a href="#">
                <BiCalendar className="icon" /> Daily Reporting
              </a>
            </li>
            <li>
              <a href="#">
                <BsFileBarGraph className="icon" /> Revanue Forcasting
              </a>
            </li>
          </ul>
          <button className="featureBtn">
            Get Free Trail <BsFillArrowRightCircleFill className="icon" />
          </button>
        </div>
      </div>

      <div className="featureSection3 flex">
        <div className="featureContent featureContent2">
          <h1>Integrate, collaborate, and grow with eizaCRM</h1>
          <p>
            With cloud features, make sure your business can collaborate easly.
          </p>
          <ul className="featureContentLinks grid">
            <li>
              <a href="#">
                <BsGraphUp className="icon" /> Marketing Cloud
              </a>
            </li>
            <li>
              <a href="#">
                <GiProgression className="icon" /> AppConnect
              </a>
            </li>
            <li>
              <a href="#">
                <BiCalendar className="icon" /> Insightly Marketing
              </a>
            </li>
            <li>
              <a href="#">
                <BsFileBarGraph className="icon" /> Build relatioinships
              </a>
            </li>
          </ul>
          <button className="featureBtn">
            Get Free Trail <BsFillArrowRightCircleFill className="icon" />
          </button>
        </div>
        <div className="featureImg featureImg2">
          <img src={img6} alt="FeatureImage" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
