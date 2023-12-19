import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./Hero.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import Image from "../../../components/Image";
import ScrollParallax from "../../../components/ScrollParallax";

const Hero = ({ scrollToRef }) => {
    return (
        <div className={styles.hero}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <div className={cn("stage", styles.stage)}>Track smarter. get Better</div>
                    <h1 className={cn("h1", styles.title)}>Smart Health management for everyone.</h1>
                    <div className={styles.text}>
                        Discover Falcon, your ultimate health partner. Effortlessly track symptoms, mood, and
                        medications. Tailored care plans, team coordination, and a wealth of resources await. Take
                        control of your health journey with Falcon.
                    </div>
                    <div className={styles.btns}>
                        <Link className={cn("button", styles.button)} href="">
                            Coming soon ...
                        </Link>
                        {/* <Link className={cn("button-stroke", styles.button)} href="/class02-details">
                            Book a Class
                        </Link> */}
                    </div>
                </div>
                <ScrollButton
                    onScroll={() => scrollToRef.current.scrollIntoView({ behavior: "smooth" })}
                    className={styles.scroll}
                />
                <div className={styles.gallery}>
                    <div className={styles.preview}>
                        <Image
                            srcSet="/images/content/form-2.png 2x"
                            srcSetDark="/images/content/form-2.png 2x"
                            src="/images/content/form-2.png"
                            srcDark="/images/content/form-2.png"
                            alt="Main"
                        />
                    </div>
                    {/* <ScrollParallax className={styles.preview} animateIn="fadeInUp" delay={300}>
                        <img srcSet="/images/content/ball@2x.png 2x" src="/images/content/ball.png" alt="Ball" />
                    </ScrollParallax>
                    <ScrollParallax className={styles.preview} animateIn="fadeInUp" delay={600}>
                        <img
                            srcSet="/images/content/ball-black@2x.png 2x"
                            src="/images/content/ball-black.png"
                            alt="Ball"
                        />
                    </ScrollParallax> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
