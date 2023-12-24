import React, { useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import History from "./History";

const Hero = () => {
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
