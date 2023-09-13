import React from "react";
import './Platform.css';
import img1 from '../../Assets/img4.jpg';
import {AiFillPlayCircle} from 'react-icons/ai';

const Platform = () => {
  return (
    <section className="platformSection">
      <div className="platformContainer">
        <div className="platformContent">
          <h1>
            Grow Better with eizaCRM Today
          </h1>
          <p>
            With tools to make every part of your process more human and a support team excited to help you, getting started with eiza CRM has never been easier.
          </p>
          <div className="buttonSection flex">
            <button className="button">Start Free Trail</button>
            <button className="button btn">
              <AiFillPlayCircle className="icon" /> Watch Demo
            </button>
          </div>
        </div>
        <div className="platformImg">
          <img src={img1} alt="heroIamge" />
        </div>
      </div>
    </section>
  );
};

export default Platform;
