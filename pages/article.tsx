import React from "react";
import Post from "src/screens/Article/Post";
import Review from "src/components/Review";
import Story from "src/screens/Article/Story";

const Download = () => {
    return (
        <>
            <Post />
            <Review className="section-bg" />
            <Story />
        </>
    );
};

export default Download;
