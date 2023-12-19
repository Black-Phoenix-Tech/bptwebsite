import React from "react";
import Plan from "src/screens/Pricing/Plan";
import Comment from "src/screens/Pricing/Comment";
import Faq from "src/screens/Pricing/Faq";
import Testimonials from "src/components/Testimonials";

const Pricing = () => {
    return (
        <>
            <Plan />
            <Comment />
            <Faq />
            <Testimonials className="section-bg" />
        </>
    );
};

export default Pricing;
