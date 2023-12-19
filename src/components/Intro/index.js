import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./Intro.module.sass";
import ScrollParallax from "../ScrollParallax";

const Intro = ({ scrollToRef }) => {
    return (
        <div className={styles.section} ref={scrollToRef}>
            <div className={cn("container", styles.container)}>
                <div className={styles.gallery}>
                    <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                        <img
                            srcSet="/images/content/app-tracker.png 2x"
                            src="/images/content/app-tracker.png"
                            alt="Bag"
                        />
                    </ScrollParallax>
                    {/* <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                        <img srcSet="/images/content/gloves@2x.png 2x" src="/images/content/gloves.png" alt="Gloves" />
                    </ScrollParallax> */}
                    {/* <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                        <img
                            srcSet="/images/content/bottle-1@2x.png 2x"
                            src="/images/content/bottle-1.png"
                            alt="Bottle"
                        />
                    </ScrollParallax> */}
                </div>
                <div className={styles.wrap}>
                    <h2 className={cn("h2", styles.title)}>
                        Centralizing <span className={cn("h2", styles.bold)}>Care</span> and{" "}
                        <span className={cn("h2", styles.boldlight)}>Tracking</span>
                    </h2>
                    <div className={styles.text}>
                        Falcon is a personal health tracking app that allows patients to monitor their health
                        conditions, medications, symptoms, and lifestyle factors. The app centralizes patient data and
                        care coordination features to empower patients in managing their health.
                        {/* 🔥🏀 */}
                    </div>
                    <Link className={cn("button", styles.button)} href="/">
                        Start free trial
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Intro;
