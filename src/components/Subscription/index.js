import React, { useState } from "react";
import cn from "classnames";
import styles from "./Subscription.module.sass";
import Icon from "../Icon";

const Subscription = ({ className, placeholder }) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const module = await import("../../../firebase/submitForm");
            module.submitForm({ name: "", email: email, message: "" });
            setLoading(false);
            setEmail("Thanks, email recieved!");
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <div className={cn(styles.form, className)} onSubmit={() => handleSubmit()}>
            <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder={placeholder}
                required
            />
            <button className={styles.btn} onClick={() => handleSubmit()}>
                {loading ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 140 140"
                        preserveAspectRatio="xMidYMid"
                        style={{ background: "none" }}
                    >
                        <circle cx="70" cy="70" r="45" fill="none" strokeWidth="5" stroke="#0073e6">
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
                    <Icon name="arrow-right" size="14" />
                )}
            </button>
        </div>
    );
};

export default Subscription;
