import React from "react";
import css from "./FourthSection.module.css";
import { MidTexts } from "./list";
import SectionCard from "./Card";

const FourthSection = () => {
  return (
    <div className={css.container}>
      <div className={css.sections}>
        {
          MidTexts.map((item, index) => (
            <SectionCard
              key={index}
              tagline={item.tagline}
              heading={item.heading}
              description={item.description}
              flex_direction={index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
              img={item.images[0]}
            />
          ))
        }
      </div>
      
    </div>
  );
};

export default FourthSection;
