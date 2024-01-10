import React, { useState } from "react";
import cn from "classnames";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import Icon from "src/components/Icon";

const Hero = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const module = await import("../../../../firebase/submitForm");
            module.submitForm({ name: name, email: email, message: message });
            setLoading(false);
            setName("");
            setEmail("");
            setMessage("Thank you, your message received!");
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <div className={styles.hero}>
            <div className={cn("container", styles.container)}>
                <div className={styles.col}>
                    <div className={styles.wrap}>
                        <div className={styles.contact}>
                            <h1 className={cn("h1", styles.title)}>Contact Us</h1>
                            <div className={styles.text}>
                                For any inquiries, feedback, or support regarding the Falcon app, our team is here to
                                assist you.
                            </div>
                            <div className={cn(styles.form)} action="" onSubmit={() => handleSubmit()}>
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    placeholder={"Your Email"}
                                    required
                                />
                                <textarea
                                    rows={4}
                                    className={styles.textarea}
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    name="message"
                                    placeholder={"Your Message"}
                                    required
                                />
                                <div className={styles.btns}>
                                    <button className={cn("button", styles.button)} onClick={() => handleSubmit()}>
                                        {loading ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 140 140"
                                                preserveAspectRatio="xMidYMid"
                                                style={{ background: "none" }}
                                            >
                                                <circle
                                                    cx="70"
                                                    cy="70"
                                                    r="45"
                                                    fill="none"
                                                    strokeWidth="5"
                                                    stroke="#0073e6"
                                                >
                                                    <animate
                                                        attributeName="stroke-dasharray"
                                                        dur="2s"
                                                        repeatCount="indefinite"
                                                        values="0 200;90 150;150 90;200 0"
                                                        keyTimes="0;0.5;0.75;1"
                                                    />
                                                    <animate
                                                        attributeName="stroke-dashoffset"
                                                        dur="2s"
                                                        repeatCount="indefinite"
                                                        values="0 -200;-90 -150;-150 -90;-200 0"
                                                        keyTimes="0;0.5;0.75;1"
                                                    />
                                                </circle>
                                            </svg>
                                        ) : (
                                            <>
                                                Submit <Icon name="arrow-right" size="14" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
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
