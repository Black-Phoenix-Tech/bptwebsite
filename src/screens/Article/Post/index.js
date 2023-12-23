import React from "react";
import cn from "classnames";
import styles from "./Post.module.sass";
import Icon from "../../../components/Icon";
import Image from "next/image";

const Post = ({ title, subtitle, main, pic, link, linkTitle }) => {
    const parts = main.split("Black phoenix");
    return (
        <div className={cn("section", styles.section)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.head}>
                    <h1 className={cn("h1", styles.title)}>{title}</h1>
                    <button className={cn("button-circle-stroke", styles.button)}>
                        <Icon name="download" size="22" />
                    </button>
                </div>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <div className={styles.preview}>
                            <Image src={pic} alt="People" width={290} height={290} />
                        </div>
                    </div>
                    <div className={styles.col}>
                        <h2 className={cn("h2", styles.title)}>{subtitle}</h2>
                        <div className={styles.info}>
                            {" "}
                            {parts[0]}
                            <strong>Black phoenix</strong>
                            {parts[1]}
                        </div>
                        <div className={styles.content}>
                            <a className={styles.anchor} href={link} target="_blank">
                                Visit Full article on {linkTitle}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
