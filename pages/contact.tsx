import React from "react";
import ValueProps from "src/screens/Contact/ValueProps";
import Hero from "src/screens/Contact/Hero";
import Offer from "src/components/Offer";

const Contact = () => {
    return (
        <>
            <Hero />
            <ValueProps className="section-pb" />
            <Offer className="section-border-top" />
        </>
    );
};

export default Contact;
