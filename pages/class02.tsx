import React, { useRef } from "react";
import Hero from "src/screens/Class02/Hero";
import Trainers from "src/screens/Class02/Trainers";
import Community from "src/components/Community";
import Programs from "src/components/Programs";

const Class02 = () => {
    const scrollToRef = useRef(null);

    return (
        <>
            <Hero scrollToRef={scrollToRef} />
            <Programs
                classNameSection={undefined}
                scrollToRef={scrollToRef}
                classNameTitle="h4"
                title="A special 1-on-1 workout program that gives you complete control
            over the volume for a perfect physique"
            />
            <Trainers />
            <Community />
        </>
    );
};

export default Class02;
