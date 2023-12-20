import React, { useState } from "react";
import cn from "classnames";
import styles from "./Subscription.module.sass";
import Icon from "../Icon";
import submitForm from "../../../firebase/submitForm";

const Subscription = ({ className, placeholder }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (z) => {
        // e.preventDefault();
        try {
            submitForm({ name: "s", email: "a.m.h.optimist@gmail.com", message: "s" });
        } catch (error) {
            // Handle error
            console.error("Error sending email:", error);
        }
    };
    // const handleSubmit = (e) => {
    //   alert();
    // };

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
                <Icon name="arrow-right" size="14" />
            </button>
        </div>
    );
};

export default Subscription;
