import React, { useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Subscription from "../../../components/Subscription";
import Image from "../../../components/Image";
import Icon from "src/components/Icon";
import Link from "next/link";

const Hero = () => {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        alert();
    };

    return (
        <div className={styles.hero}>
            <div className={cn("container", styles.container)}>
                <div className={styles.col}>
                    <div className={styles.wrap}>
                        {/* <div className={cn("stage", styles.stage)}>time to get fitness pro</div> */}
                        {/* <h1 className={cn("h1", styles.title)}>Fitness Pro for any device.</h1> */}
                        {/* <div className={styles.text}>
                            Track your workouts, get better results, and be the best version of you. Less thinking, more
                            lifting.
                        </div> */}
                        <div className={styles.contact}>
                            <h1 className={cn("h1", styles.title)}>Contact Us</h1>
                            <div className={styles.text}>
                                For any inquiries, feedback, or support regarding the Falcon app, our team is here to
                                assist you.
                            </div>
                            <form className={cn(styles.form)} action="" onSubmit={() => handleSubmit()}>
                                <input
                                    className={styles.input}
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    name="name"
                                    placeholder={"Your Name"}
                                    required
                                />
                                <input
                                    className={styles.input}
                                    type="email"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    name="email"
                                    placeholder={"Your Email"}
                                    required
                                />
                                <textarea
                                    rows={4}
                                    className={styles.textarea}
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    name="message"
                                    placeholder={"Your Message"}
                                    required
                                />
                                {/* <button className={styles.btn}>
                                    <Icon name="arrow-right" size="14" />
                                </button> */}
                                <div className={styles.btns}>
                                    <Link className={cn("button", styles.button)} href="">
                                        Submit <Icon name="arrow-right" size="14" />
                                    </Link>
                                    {/* <Link className={cn("button-stroke", styles.button)} href="/class02-details">
                            Book a Class
                        </Link> */}
                                </div>
                            </form>
                        </div>
                        {/* <Subscription className={styles.subscription} placeholder="Enter your email" /> */}
                    </div>
                </div>
                <div className={styles.colImage}>
                    <div className={styles.preview}>
                        <Image
                            srcSet="/images/content/app-qa.png 2x"
                            srcSetDark="/images/content/app-qa.png 2x"
                            src="/images/content/app-qa.png"
                            srcDark="/images/content/app-qa.png"
                            alt="Download bg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
