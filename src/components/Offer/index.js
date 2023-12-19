import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./Offer.module.sass";

const Offer = ({ className }) => {
    return (
        <div className={cn(className, styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={cn("stage", styles.stage)}>try it, it's free 🎾</div>
                <h2 className={cn("h1", styles.title)}>Optimize Your Health Journey with Falcon</h2>
                <div className={styles.text}>
                    Take control of your health today! Download Falcon now to start tracking your wellness, connecting
                    with care teams, and accessing valuable health resources. Your personalized health journey awaits
                </div>
                <Link className={cn("button", styles.button)} href="/download">
                    Get Started with Falcon
                </Link>
            </div>
        </div>
    );
};

export default Offer;
