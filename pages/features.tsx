import React, { useRef } from "react";
// import styles from "./Features.module.sass";
import Hero from "src/screens/Features/Hero";
import Offer from "src/components/Offer";
import Lifestyle from "src/screens/Features/Lifestyle";

const Features = () => {
    const scrollToRef = useRef(null);

    return (
        <>
            <Hero scrollToRef={scrollToRef} />
            <Lifestyle />
            <Offer className="section" />
        </>
    );
};

export default Features;
