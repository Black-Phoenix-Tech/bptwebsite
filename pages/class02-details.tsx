import React from "react";
import Hero from "src/screens/Class02Details/Hero";
import Programs from "src/components/Programs";

const Class02Details = () => {
    return (
        <>
            <Hero />
            <Programs
                scrollToRef={undefined}
                classNameSection="section-pb"
                classNameTitle="h2"
                title="You may interested"
            />
        </>
    );
};

export default Class02Details;
