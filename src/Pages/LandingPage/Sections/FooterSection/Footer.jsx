import React from "react";
import css from "./Footer.module.css";
import SixthSection from "../SixthSection/SixthSection";
import OutlinedBtn from "../../../../Components/OutlinedButton/OutlinedBtn";

const Footer = () => {
    const MediaLinks=()=>{
        return <div className={css.circleHolder}>
            
        </div>
    }
  return (
    <div className={css.container}>
      <div className={css.sections}>
        <SixthSection />
        <div className={css.footer}>
          <div className={css.logo}>
            <h1>Logo</h1>
          </div>
          <div className={css.links}>
            <div className={css.sectionOne}>
              <div className={css.header}>
                <h3>About Us</h3>
              </div>
              <div className={css.weblinks}>
                <span>Home</span>
                <span>Services</span>
                <span>Contact Us</span>
                <span>Blog</span>
                <span>FAQ</span>
              </div>
            </div>
            <div className={css.sectionOne}>
              <div className={css.header}>
                <h3>Support</h3>
              </div>
              <div className={css.weblinks}>
                <span>Terms</span>
                <span>Privacy</span>
                <span>Sitemap</span>
                <span>Career</span>
                <span>News</span>
              </div>
            </div>
            <div className={css.sectionOne}>
              <div className={css.header}>
                <h3>Events</h3>
              </div>
              <div className={css.weblinks}>
                <span>Testimonials</span>
                <span>Partners</span>
                <span>Gallery</span>
                <span>Portfolio</span>
                <span>Features</span>
              </div>
            </div>
          </div>
          <div className={css.subscriptionLetter}>
            <h3>Subscribe</h3>
            <span>
              Join our mailing list to receive updates and exclusive offers.
            </span>
            <div className={css.InputClass}>
              <input type="text" placeholder="Enter your Email" />
             <OutlinedBtn title={'Subscribe'}/>
            </div>
            <span>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from us
            </span>
          </div>
        </div>
        <div className={css.copyright}>
            <div className={css.copyrightsectionsOne}>
                <div className={css.copyrightsection}>
                    <span>* 2023 Fire Professionals. All rights reserved.</span>
                </div>
                <div className={css.copyrightlinks}>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Cookie Policy</span>
                </div>
            </div>
            <div className={css.socialMediaLinks}>
                <MediaLinks/>
                <MediaLinks/>
                <MediaLinks/>
                <MediaLinks/>
                <MediaLinks/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
