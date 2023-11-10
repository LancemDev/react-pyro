import React from 'react'
import css from "./BlackButton.module.css"
const BlackButton = ({title, onClickMethod}) => {
  return (
    <div
    onClick={onClickMethod}
    className={css.container}>
        <h3>{title}</h3>
    </div>
  )
}

export default BlackButton