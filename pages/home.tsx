import React, { useEffect, useRef } from "react";
// import styles from "./Home.module.sass";
import Hero from "src/screens/Home/Hero";
import Steps from "src/screens/Home/Steps";
import Intro from "src/components/Intro";
import Review from "src/components/Review";
import Advantages from "src/components/Advantages";
import Workouts from "src/components/Workouts";
import Offer from "src/components/Offer";

const Home = () => {
    const scrollToRef = useRef(null);
    return (
        <>
            <Hero scrollToRef={scrollToRef} />
            <Steps scrollToRef={scrollToRef} />
            <Intro scrollToRef={undefined} />
            <Advantages />
            {/* <Review className="section" /> */}
            <Workouts />
            <Offer className="section-border-top" />
        </>
    );
};

export default Home;
