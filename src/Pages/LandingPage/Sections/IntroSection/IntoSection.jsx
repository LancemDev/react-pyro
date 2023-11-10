import React from "react";
import css from "./IntroSection.module.css";
import BlackButton from "../../../../Components/BlackButton/BlackButton"
import OutlinedBtn from "../../../../Components/OutlinedButton/OutlinedBtn"
import background from "../../../../Assets/firefighter_1.jpg"
import { Parallax } from "react-parallax";


const IntoSection = () => {
  return (
    <div className={css.container}>
      <div className={css.ImageSection}>
      {/* <img src={background} alt="back"/> */}
      <Parallax
        bgImage={background}
        className="w-full h-full"
      >

      </Parallax>

      </div>
      <div className={css.IntroStatement}>
        <div className={css.openingStatement}>   
          <h1>
          Empowering Fire
            <br />
            Response Teams with
            <br />
            Advanced Technology 
            <br />
            to Combat Fires
          </h1>
        </div>
        <div className={css.moreDetails}>
          <span>
            Welcome to Fire Professionals, where we offer cutting-edge technology solutions for fire detection, confirmation, monitoring, and alerting. Our mission is to empower response teams with advanced technology to combat various types of fires effectively. Our unique and compelling solution combines the power of IoT, advanced sensors, and machine learning, enabling proactive fire detection, reducing property loss, and minimizing CO2 emissions.
          </span>
          <div className={css.navButtons}>
            <div className={css.blackButton}>
            <BlackButton title={'Learn More'}/>
            </div>
            <div className={css.outlinedBtn}>
            <OutlinedBtn title={'Sign Up'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntoSection;
