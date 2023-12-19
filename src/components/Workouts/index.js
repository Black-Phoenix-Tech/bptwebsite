import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./Workouts.module.sass";
import Image from "../Image";
import ScrollParallax from "../ScrollParallax";

const items = [
    "Track daily health details comprehensively",
    "Visualize and customize data insights",
    "Tailored care plans for specific needs",
    "Coordinate care teams seamlessly",
    "Access a diverse education library",
    "Connect through community forums",
    "Secure messaging for all users",
    "Seamlessly integrate health devices",
];

const Workouts = () => {
    return (
        <div className={styles.section}>
            <div className={cn("container", styles.container)}>
                <div className={styles.gallery}>
                    <div className={styles.preview}>
                        <Image
                            srcSet="/images/content/form-3.png"
                            srcSetDark="/images/content/form-3.png"
                            src="/images/content/form-3.png"
                            srcDark="/images/content/form-3.png"
                            alt="Phones"
                        />
                    </div>
                    {/* <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                        <img srcSet="/images/content/apple@2x.png 2x" src="/images/content/apple.png" alt="Apple" />
                    </ScrollParallax> */}
                    <ScrollParallax className={styles.preview} animateIn="fadeInUp">
                        <img srcSet="/images/content/apple@2x.png 2x" src="/images/content/apple.png" alt="Apple" />
                    </ScrollParallax>
                </div>
                <div className={styles.wrap}>
                    <h2 className={cn("h2", styles.title)}>All-in-One Health Hub</h2>
                    <div className={styles.info}>
                        Track, customize, and coordinate seamlessly. Falcon offers tailored care, diverse resources,
                        secure messaging, and device integration for your holistic health!
                    </div>
                    <ul className={styles.list}>
                        {items.map((x, index) => (
                            <li className={styles.item} key={index}>
                                {x}
                            </li>
                        ))}
                    </ul>
                    <div className={styles.btns}>
                        <Link className={cn("button", styles.button)} href="/pricing">
                            View All Features
                        </Link>
                        {/* <button className={cn("button-stroke", styles.button)}>Request a demo</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workouts;
