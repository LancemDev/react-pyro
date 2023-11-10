import React from "react";
import css from "./ThirdSection.module.css";
import banner_img from './../../../../Assets/banner_2.jpeg'


const ThirdSection = () => {
  const PointWidget = ({ header, description }) => {
    return (
      <div className={css.pointContainer}>
        <h1>{header}</h1>
        <span>{description}</span>
      </div>
    );
  };
  return (
    <div className={css.container}>
      <div className={css.sections}>
        <div className={css.ImageSection} style={{backgroundColor:'transparent'}}>
        <img src={banner_img} className="w-full h-75vh object-cover" alt="" />

        </div>
        <div className={css.statementsection}>
          <div className={css.styledContainer}>
            
          </div>
          <div className={css.statements}>
            <PointWidget
              header={"Exceptional Detection Technology"}
              description={
                "Our advanced technology enables accurate and timely detection of fires,providing crucial information for effective response and containment"
              }
            />
            <PointWidget
              header={"Reliable Confirmation System"}
              description={
                "With our reliable confirmation system, you can quickly verify the presence of fires, ensuring prompt action and minimizing false alarms"
              }
            />
            <PointWidget
              header={"Comprehensive Monitoring Solutions"}
              description={
                "Our comprehensive monitoring solutions provide real-time data on fire beahviour, helping you make informed decisons and coordinate response efforts"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
