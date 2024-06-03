import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import styles from "./Home.module.css";

import Navbar from "./NavbarHome.jsx";
import Benefits from './Benefits.jsx';
import Plans from './Plans.jsx';
import PricingPlans from './PricingPlans.jsx';
import Footer from "../component/Footer.jsx";
import ImageSlider from "./ImageSlider.jsx";
import MainSection from "./MainSection.jsx";
import ContactForm from "./ContactForm.jsx";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <MainSection
        title="WELCOME TO"
        subtitle="THE BEST CHOICE FOR YOUR GYM"
        buttonText="Learn More"
        buttonLink="/about"
      />
      <div className={styles.content}>
        <ImageSlider />
        <div className={styles.sectionSpacing}>
          <PricingPlans />
        </div>
        <div className={styles.sectionSpacing}>
          <ContactForm />
        </div>
        <div className={styles.sectionSpacing}>
          <Footer />
        </div>
      </div>

    </div >
  );
};

export default Home;