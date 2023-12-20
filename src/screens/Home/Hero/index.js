import React, { useEffect } from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./Hero.module.sass";
// import Image from "../../../components/Image";
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
                            {/* <div className={styles.category}>Stay informed about the upcoming app and newsletter</div> */}
                            {/* <div className={styles.info}>
                                Subscribe our newsletter to get updates and health resource.
                            </div> */}
                            <Subscription className={styles.subscription} placeholder="Enter your email" />
                        </div>
                        {/* <Link className={cn("button", styles.button)} href="/download">
                            Download App
                        </Link>
                        <Link className={cn("button-stroke", styles.button)} href="/class02-details">
                            Book a Class
                        </Link> */}
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
                    {/* <div className={styles.preview}>
                        <Image
                            srcSet="/images/content/app-preview@2x.png 2x"
                            srcSetDark="/images/content/app-preview@2x.png 2x"
                            src="/images/content/app-preview.png"
                            srcDark="/images/content/app-preview.png"
                            alt="app-preview"
                        />
                    </div> */}
                    <div className={styles.preview}>
                        <Image
                            width={2020}
                            height={660}
                            // srcSet="/images/content/form-1.png 2x"
                            src="/images/content/form-1.png"
                            alt="Ball"
                        />
                    </div>
                    {/* <div className={styles.preview}>
                        <img srcSet="/images/content/bottle@2x.png 2x" src="/images/content/bottle.png" alt="Bottle" />
                    </div>
                    <div className={styles.preview}>
                        <img
                            srcSet="/images/content/ball-black@2x.png 2x"
                            src="/images/content/ball-black.png"
                            alt="Ball black"
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
