import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Subscription from "../Subscription";
import Theme from "../Theme";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
    {
        title: "Lifestyle",
        url: "/lifestyle",
    },
    {
        title: "Pricing",
        url: "/pricing",
    },
    {
        title: "Class",
        url: "/class01",
    },
    {
        title: "Features",
        url: "/features",
    },
    {
        title: "Download",
        url: "/download",
    },
];

const socials = [
    {
        title: "facebook",
        size: "16",
        url: "https://www.facebook.com/ui8.net/",
    },
    {
        title: "twitter",
        size: "18",
        url: "https://twitter.com/ui8",
    },
    {
        title: "instagram",
        size: "16",
        url: "https://www.instagram.com/ui8net/",
    },
    {
        title: "dribbble",
        size: "16",
        url: "https://dribbble.com/ui8",
    },
    {
        title: "behance",
        size: "20",
        url: "https://www.behance.net/ui8",
    },
];

const Footer = () => {
    const [visible, setVisible] = useState(false);
    const { pathname } = useRouter();

    return (
        <footer className={styles.footer}>
            <div className={styles.body}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.col}>
                        <div className={styles.box}>
                            <div className={styles.boxcol}>
                                <Link className={styles.logo} href="/">
                                    <Image
                                        className={styles.pic}
                                        src="/images/logo-light.svg"
                                        srcDark="/images/logo-dark.svg"
                                        alt="Fitness Pro"
                                    />
                                </Link>
                            </div>
                            <Theme className={styles.theme} />
                        </div>
                        <div
                            className={cn(styles.item, {
                                [styles.active]: visible,
                            })}
                        >
                            <div className={styles.category} onClick={() => setVisible(!visible)}>
                                footer nav
                                <Icon name="arrow-bottom" size="9" />
                            </div>
                            <div className={styles.menu}>
                                {menu.map((x, index) => (
                                    <Link
                                        className={cn(styles.link, {
                                            [styles.active]: pathname === x.url,
                                        })}
                                        href={x.url}
                                        key={index}
                                    >
                                        {x.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* B21-175 Longwood Road South
, ON */}
                    <div className={styles.col}>
                        <div className={styles.category}>contact</div>
                        <div className={styles.info}>
                            <p>Innovation Factory</p>
                            <p>B21-175 Longwood Road South</p>
                            <p>Hamilton, Ontario</p>
                            <p>437-755-2235</p>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.category}>newsletter</div>
                        <div className={styles.info}>Subscribe our newsletter to get updates and health resource.</div>
                        <Subscription className={styles.subscription} placeholder="Enter your email" />
                    </div>
                </div>
            </div>
            <div className={styles.foot}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.copyright}>Copyright © 2024 Black Phoenix Tech LLC. All rights reserved</div>
                    <div className={styles.socials}>
                        {socials.map((x, index) => (
                            <a
                                className={styles.social}
                                href={x.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                            >
                                <Icon name={x.title} size={x.size} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
