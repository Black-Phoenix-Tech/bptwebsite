import React from "react";
import cn from "classnames";
import styles from "./Advantages.module.sass";
import Image from "next/image";

const Advantages = () => {
    return (
        <div className={styles.hero}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <h1 className={cn("h2", styles.title)}>Healthcare Collaboration</h1>
                    <div className={styles.text}>
                        Falcon unites patients, doctors, and caregivers, offering personalized health tracking for
                        patients, streamlined communication for doctors, and seamless collaboration tools for
                        caregivers. It's the platform where healthcare collaboration thrives.
                    </div>
                </div>

                <div className={styles.gallery}>
                    <div className={styles.preview}>
                        <Image width={360} height={560} src="/images/content/app-collaborations.png" alt="Ball" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantages;
