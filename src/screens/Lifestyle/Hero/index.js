import React, { useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import History from "./History";
import Item from "./Item";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
    {
        title: "Lifestyle",
        items: [
            {
                url: "/article",
                title: "7 Impossibly Hard Yoga Moves to Master",
                avatar: "/images/content/avatar-5.png",
                author: "Porter Daniel",
                image: "/images/content/lifestyle-photo-1.png",
                image2x: "/images/content/lifestyle-photo-1@2x.png",
                category: "red",
                date: "Feb 03, 2021",
                categoryContent: "fitness",
            },
            {
                url: "/article",
                title: "Keep It Chill: How To Do a Water Salutation",
                avatar: "/images/content/avatar-2.png",
                author: "Clemens Reilly",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-2.png",
                image2x: "/images/content/lifestyle-photo-2@2x.png",
                category: "green",
                categoryContent: "yoga",
            },
            {
                url: "/article",
                title: "Keep It Chill: How To Do a Water Salutation",
                avatar: "/images/content/avatar-3.png",
                author: "Lorine Parker",
                date: "Feb 03, 2021",
                image: "/images/content/lifestyle-photo-3.png",
                image2x: "/images/content/lifestyle-photo-3@2x.png",
                category: "pink",
                categoryContent: "new",
            },
        ],
    },
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <h2 className={cn("hero", styles.title)}>Lifestyle</h2>
                <div className={styles.info}>
                    Empower Your Health Journey with Comprehensive Tracking Falcon App, get better results, and be the
                    best version of you.
                </div>
                <History />
            </div>
        </div>
    );
};

export default Hero;
