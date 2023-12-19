import React, { useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "src/screens/Home/Hero";
import Clients from "src/components/Clients";
import Steps from "src/screens/Home/Steps";
import Intro from "src/components/Intro";
import Book from "src/screens/Home/Book";
import ValueProps from "src/components/ValueProps";
import About from "src/screens/Home/About";
import Team from "src/screens/Home/Team";
import Review from "src/components/Review";
import Quality from "src/screens/Home/Quality";
import Advantages from "src/components/Advantages";
import Workouts from "src/components/Workouts";
import Offer from "src/components/Offer";

const Home = () => {
    const scrollToRef = useRef(null);

    return (
        <>
            <Hero scrollToRef={scrollToRef} />
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-jarallax-element="-50">
                        <p className="lead big wow fadeInUp">
                            Welcome to a world where engineering marvels and artistic design collide, where innovation
                            takes center stage, and where the passion for automotive excellence is on full display. Step
                            into the realm of our mesmerizing car exhibition, an immersive journey through the evolution
                            of automotive technology, style, and performance.
                        </p>
                    </div>
                </div>
            </div> */}
            {/* <Clients /> */}
            <Steps scrollToRef={scrollToRef} />
            <Intro scrollToRef={undefined} />
            <Advantages />
            {/* <Book /> */}
            {/* <ValueProps className="section" /> */}
            {/* <About /> */}
            {/* <Team /> */}
            <Review className="section" />
            {/* <Quality /> */}

            <Workouts />
            <Offer className="section-border-top" />
        </>
    );
};

export default Home;
