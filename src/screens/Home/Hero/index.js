import React from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import Image from "next/image";
import Subscription from "src/components/Subscription";

const Hero = ({ scrollToRef }) => {
    return (
        <div className={styles.hero}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <div className={cn("stage", styles.stage)}>Falcon Health Tracker</div>
                    <h1 className={cn("h2", styles.title)}>Your Personalized Health Companion</h1>
                    <div className={styles.text}>
                        Revolutionize your health management with Falcon. Track symptoms, medications, and lifestyle
                        factors effortlessly. Connect with care teams, access tailored care plans, and gain insights for
                        a healthier tomorrow.
                    </div>
                    <div className={styles.btns}>
                        <div className={styles.col}>
                            <Subscription className={styles.subscription} placeholder="Enter your email" />
                        </div>
                    </div>
                </div>
                <ScrollButton
                    onScroll={() =>
                        scrollToRef.current.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                    className={styles.scroll}
                />
                <div className={styles.gallery}>
                    <div className={styles.preview}>
                        <Image width={2020} height={660} src="/images/content/form-1.png" alt="Ball" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
