import React from "react";
import css from "./LandingPage.module.css";
import IntroSection from "./Sections/IntroSection/IntoSection";
import SecondSection from "./Sections/SecondSection/SecondSection";
import ThirdSection from "./Sections/ThirdSection/ThirdSection";
import FourthSection from "./Sections/FourthSection/FourthSection";
import FifthSection from "./Sections/FifthSection/FifthSection";
import Footer from "./Sections/FooterSection/Footer";

const LandingPage = () => {
  return (
    <div className={css.container}>
      <IntroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
