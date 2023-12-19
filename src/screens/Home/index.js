import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "./Hero";
import Clients from "../../components/Clients";
import Steps from "./Steps";
import Intro from "../../components/Intro";
import Book from "./Book";
import ValueProps from "../../components/ValueProps";
import About from "./About";
import Team from "./Team";
import Review from "../../components/Review";
import Quality from "./Quality";
import Advantages from "../../components/Advantages";
import Workouts from "../../components/Workouts";
import Offer from "../../components/Offer";

const Home = () => {
  const scrollToRef = useRef(null);

  return (
    <>
      <Hero scrollToRef={scrollToRef} />
      <div class="container">
        <div class="row">
          <div class="col-lg-12" data-jarallax-element="-50">
            <p class="lead big wow fadeInUp">
              Welcome to a world where engineering marvels and artistic design
              collide, where innovation takes center stage, and where the
              passion for automotive excellence is on full display. Step into
              the realm of our mesmerizing car exhibition, an immersive journey
              through the evolution of automotive technology, style, and
              performance.
            </p>
          </div>
        </div>
      </div>
      <Clients />
      <Steps scrollToRef={scrollToRef} />
      <Intro />
      <Book />
      <ValueProps className="section" />
      <About />
      <Team />
      <Review className="section" />
      <Quality />
      <Advantages />
      <Workouts />
      <Offer className="section-border-top" />
    </>
  );
};

export default Home;
