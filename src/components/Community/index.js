import React from "react";
import cn from "classnames";
import styles from "./Community.module.sass";
import Subscription from "../Subscription";
import Image from "../Image";

const Community = () => {
    return (
        <div className={cn("section-pb", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={cn("stage-small", styles.stage)}>try it, it's free 🎾</div>
                <h2 className={cn("h2", styles.title)}>Join Black Phoenix Community</h2>
                <div className={styles.text}>
                    Join community now to get free updates and also alot of freebies are waiting for you.
                </div>
                <Subscription className={styles.subscription} placeholder="Enter your email" />
            </div>
        </div>
    );
};

export default Community;
