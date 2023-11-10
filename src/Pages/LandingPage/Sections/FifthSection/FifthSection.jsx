import React from "react";
import css from "./FifthSection.module.css";
import { ListImage } from "../FifthSection/ListImage";

const FifthSection = () => {
  const ImageBox = ({ img }) => {
    return <div className='w-full h-72'>
      <img src={img} className="w-full h-full object-cover" alt="" />
    </div>;
  };
  return (
    <div className={css.container}>
      <div className={css.sections}>
        <div className={css.header}>
          <h2>Team</h2>
          <span>
          The founders of this business have extensive experience in IoT technology, sensor development, and machine learning.
          </span>
        </div>
        <div className={css.images}>
          {
            ListImage.map((item)=>(
              <ImageBox 
                img={item.images[0]}
              />
            ))
          }

        </div>
        <div className={css.testimonial}>
          <h2>*****</h2>
          <h4>
          They have successfully developed and deployed similar solutions in other industries, demonstrating their expertise and ability to execute.
          </h4>
         
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
