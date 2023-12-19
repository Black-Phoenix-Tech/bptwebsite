import React from "react";
import cn from "classnames";
import styles from "./Advantages.module.sass";
import ScrollParallax from "../ScrollParallax";

const items = [
    {
        title: "Patients track their health data",
        image: "/images/content/app-patients-track.png",
        image2x: "/images/content/app-patients-track.png",
    },
    {
        title: "Caregivers take care of their patients",
        image: "/images/content/app-caregiver1.png",
        image2x: "/images/content/app-caregiver1.png",
    },
    {
        title: "Doctors benefit from advanced reports",
        image: "/images/content/app-doctor1.png",
        image2x: "/images/content/app-doctor1.png",
    },
];

const Advantages = () => {
    return (
        <div className={cn("section-bg", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head}>
                    <div className={cn("h2", styles.title)}>Healthcare Collaboration</div>
                    <div className={styles.info}>
                        Falcon unites patients, doctors, and caregivers, offering personalized health tracking for
                        patients, streamlined communication for doctors, and seamless collaboration tools for
                        caregivers. It's the platform where healthcare collaboration thrives.
                    </div>
                </div>
                <div className={styles.list}>
                    {items.map((x, index) => (
                        <ScrollParallax className={styles.item} key={index}>
                            <div className={styles.preview}>
                                <img srcSet={`${x.image2x} 2x`} src={x.image} alt="Equipment" />
                            </div>
                            <div className={styles.subtitle}>{x.title}</div>
                        </ScrollParallax>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Advantages;
