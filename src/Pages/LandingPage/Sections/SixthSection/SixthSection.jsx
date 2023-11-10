import React from 'react'
import css from "./SixthSection.module.css"
import BlackButton from "../../../../Components/BlackButton/BlackButton"
import OutlinedBtn from '../../../../Components/OutlinedButton/OutlinedBtn'

const SixthSection = () => {
  return (
    <div className={css.container}>
        <div className={css.sections}>
            <div className={css.statements}>
                <h1>Get in touch for more</h1>
                <span>Learn how our technology enhances wildfire management</span>
            </div>
            <div className={css.navBtns}>
                <BlackButton title={'Contact'}/>
                <OutlinedBtn title={'Demo'}/>
            </div>
        </div>
    </div>
  )
}

export default SixthSection