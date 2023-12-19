import React, { useRef } from "react";
// import styles from "./Features.module.sass";
import Hero from "src/screens/Features/Hero";
import Intro from "src/components/Intro";
import ValueProps from "src/components/ValueProps";
import Program from "src/screens/Features/Program";
import About from "src/screens/Features/About";
import Review from "src/components/Review";
import Clients from "src/components/Clients";
import Workouts from "src/components/Workouts";
import Advantages from "src/components/Advantages";
import Offer from "src/components/Offer";
import Lifestyle from "src/screens/Features/Lifestyle";

const Features = () => {
    const scrollToRef = useRef(null);

    return (
        <>
            <Hero scrollToRef={scrollToRef} />
            {/* <Intro scrollToRef={scrollToRef} /> */}
            {/* <ValueProps className="section-pb" /> */}
            {/* <Program /> */}
            {/* <About /> */}
            {/* <Review className="section-pb64" /> */}
            {/* <Clients /> */}
            {/* <Workouts /> */}
            <Lifestyle />
            {/* <Advantages /> */}
            <Offer className="section" />
        </>
    );
};

export default Features;
