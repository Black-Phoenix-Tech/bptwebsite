import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import ScrollParallax from "../../../components/ScrollParallax";

const items = [
    {
        title: "Download Falcon",
        color: "#3772FF",
        images: "/images/content/download.svg",
        content: "Start by Downloading the iOS or Android app and Manage your health efficiently.",
    },
    {
        title: "Choose a Care Plan",
        color: "#9757D7",
        images: "/images/content/app-careplan.svg",
        content: "Personalize your health strategy. Pick plans tailored to your needs from the Care Plan Store.",
    },
    {
        title: "Track Your Health",
        color: "#EF466F",
        images: "/images/content/app-search.svg",
        content: "Monitor daily health easily. Record symptoms, mood, and more manually or via wearables.",
    },
    {
        title: "View Reports",
        color: "#45B26B",
        images: "/images/content/app-report.svg",
        content: "Understand progress with reports. Visualize trends for informed decisions.",
    },
];

const Steps = ({ scrollToRef }) => {
    return (
        <div className={cn("section", styles.section)} ref={scrollToRef}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head}>
                    <h2 className={cn("h2", styles.title)}>How it works</h2>
                    <div className={styles.info}>
                        Stacks is a production-ready library of stackable content blocks built in React Native.
                    </div>
                </div>
                <div className={styles.list}>
                    {items.map((x, index) => (
                        <ScrollParallax className={styles.item} key={index}>
                            <div className={styles.preview} style={{ backgroundColor: x.color }}>
                                <img src={x.images} alt={`Step ${index}`} />
                            </div>
                            <div className={styles.number}>Step {index + 1}</div>
                            <div className={styles.subtitle}>{x.title}</div>
                            <div className={styles.content}>{x.content}</div>
                        </ScrollParallax>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Steps;
