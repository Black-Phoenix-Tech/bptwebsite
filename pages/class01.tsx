import React from "react";
import Breadcrumbs from "src/screens/Class01/Breadcrumbs";
import Catalog from "src/screens/Class01/Catalog";
import Testimonials from "src/components/Testimonials";

const Class01 = () => {
    return (
        <>
            <Breadcrumbs />
            <Catalog />
            <Testimonials className="section-pb" />
        </>
    );
};

export default Class01;
