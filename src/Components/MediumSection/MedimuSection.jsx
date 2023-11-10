import React from "react";
import css from "./MediumSection.module.css";
import OutlinedBtn from "../../Components/OutlinedButton/OutlinedBtn";

const MedimuSection = ({
  tagline,
  heading,
  description,
  outlinedBtn,
  navBtn,
  flex_direction
}) => {
  return (
    <div className={css.container}>
      <div className={css.sections} style={flex_direction && { flexDirection: `${flex_direction} !important` }}>
        <div className={css.statementSections}>
          <span>{tagline}</span>
          <h1>{heading}</h1>
          <span>{description}</span>
          <div className={css.navButtons}>
            <div className={css.outlinedBtn}>
              <OutlinedBtn title={outlinedBtn} />
            </div>
            <div className={css.navBtnRow}>
              <h3>{navBtn}</h3>*
            </div>
          </div>
        </div>
        <div className={css.ImageSection}></div>
      </div>
    </div>
  );
};

export default MedimuSection;
