import React from "react";
import css from "./SecondSection.module.css";
import banner_img from './../../../../Assets/Fire.jpg'

const SecondSection = () => {
  return (
    <div className={css.container}>
      <div className={css.sections}>
        <div className={css.statementSection}>
          <h1>
          Understanding the Climate-Consequence Nexus: Fires' Dual Impact in Africa
          </h1>
          <span>
          In Africa, various types of fires are having a pronounced and interconnected impact on both the environment and the economy. The numbers are stark: every year, fires release millions of metric tons of carbon dioxide (CO2), fueling global warming. Simultaneously, they consume properties, disrupt ecosystems, and strain local economies. These destructive fires amplify the challenges posed by climate change. Our mission is to usher in a new era in fire management using cutting-edge technology, mitigating property losses, and reducing CO2 emissions, thus making Africa a vital battleground against climate change.
          </span>
        </div>
        <div className={css.ImageSecion}>
            <img src={banner_img} className="w-10/12 h-75vh object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
