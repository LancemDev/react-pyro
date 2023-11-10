import React from "react";
import css from "./OutlinedBtn.module.css";

const OutlinedBtn = ({ title }) => {
  return (
    <div className={css.container}>
      <h3>{title}</h3>
    </div>
  );
};

export default OutlinedBtn;
