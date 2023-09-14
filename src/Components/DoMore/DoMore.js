import React from "react";
import "./DoMore.css";

import img1 from "../../Assets/trello logo.png";
import img2 from "../../Assets/Asana logo.webp";
import img3 from "../../Assets/zendesk logo.webp";
import img4 from "../../Assets/zapier.png";
import img5 from "../../Assets/Zoom logo.png";
import img6 from "../../Assets/slack.png";
import img7 from "../../Assets/twitter.png";
import img8 from "../../Assets/sopify logo.webp";

const DoMore = () => {
  return (
    <div className="doMoreSection">
      <div className="doMoreContainer">
        <div className="doMoreHeading">
          <h2>Do More with Add-Ons</h2>
          <p>
            Connect your favorite tools and find new Add-Ons.
            <br />
            Let the platform do the work.
          </p>
        </div>
        <div className="platforms">
          <ul className="platformLists grid">
            <li className="platformItems">
              <a href="#Trello" className="anchor-platform">
                <img className="doMore-platform-img" src={img1} alt="terllo" />
                <div className="platformInfo">
                  <h3>Trello</h3>
                  <p>Project Management</p>
                </div>
              </a>
            </li>
            <li className="platformItems">
              <a href="#Asana" className="anchor-platform">
                <img className="doMore-platform-img" src={img2} alt="asana" />
                <div className="platformInfo">
                  <h3>Asana</h3>
                  <p>Project Management</p>
                </div>
              </a>
            </li>
            <li className="platformItems">
              <a href="#zendesk" className="anchor-platform">
                <img className="doMore-platform-img" src={img3} alt="zendesk" />
                <div className="platformInfo">
                  <h3>Zendesk</h3>
                  <p>Customer Service</p>
                </div>
              </a>
            </li>
            <li className="platformItems">
              <a href="#zapier" className="anchor-platform">
                <img className="doMore-platform-img" src={img4} alt="zapier" />
                <div className="platformInfo">
                  <h3>Zapier</h3>
                  <p>Automation</p>
                </div>
              </a>
            </li>
            <li className="platformItems">
              <a href="#zoom" className="anchor-platform">
                <img className="doMore-platform-img" src={img5} alt="zoom" />
                <div className="platformInfo">
                  <h3>Zoom</h3>
                  <p>Online Meeting</p>
                </div>
              </a>
            </li>
            <li className="platformItems">
              <a href="#slack" className="anchor-platform">
                <img className="doMore-platform-img" src={img6} alt="slack" />
                <div className="platformInfo">
                  <h3>Slack</h3>
                  <p>Communication</p>
                </div>
              </a>
            </li>
            <li className="platformItems">
              <a href="#twitter" className="anchor-platform">
                <img className="doMore-platform-img" src={img7} alt="twiter" />
                <div className="platformInfo">
                  <h3>Twitter</h3>
                  <p>Social Media</p>
                </div>
              </a>
            </li>
            <li className="platformItems">
              <a href="#shopify" className="anchor-platform">
                <img className="doMore-platform-img" src={img8} alt="shopify" />
                <div className="platformInfo">
                  <h3>Shopify</h3>
                  <p>Marketplace</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoMore;
