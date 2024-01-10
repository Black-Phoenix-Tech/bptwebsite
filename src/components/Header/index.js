import React, { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Header.module.sass";
import DropdownMenu from "./DropdownMenu";
import Icon from "../Icon";
import { useRouter } from "next/router";
import Image from "../Image";

const navLinks = [
    {
        title: "Home",
        url: "/home",
    },
    {
        title: "Features",
        url: "/features",
    },
    {
        title: "Contact",
        url: "/contact",
    },
    {
        title: "Lifestyle",
        url: "/lifestyle",
    },
];

const socials = [
    {
        title: "linkedin",
        size: "16",
        url: "https://www.linkedin.com/company/rns-assistant/",
    },
];

const contact = [
    {
        title: "Innovation Factory, Hamilton",
        content: "B21-175 Longwood Road South",
    },
];

const Headers = () => {
    const [visibleNav, setVisibleNav] = useState(false);

    const { pathname } = useRouter();

    return (
        <header className={styles.header}>
            <div className={cn("container", styles.container)}>
                <Link className={styles.logo} href="/" onClick={() => setVisibleNav(false)}>
                    <Image
                        className={styles.pic}
                        src="/images/logo-light.svg"
                        srcDark="/images/logo-dark.svg"
                        // width={100}
                        // height={100}
                        alt="Fitness Pro"
                    />
                    <h1 className={styles.title}>Black Phoenix</h1>
                </Link>
                <div className={cn(styles.wrap, { [styles.active]: visibleNav })}>
                    <nav className={styles.nav}>
                        {navLinks.map((x, index) =>
                            x.content ? (
                                <DropdownMenu className={styles.group} item={x} key={index} setValue={setVisibleNav} />
                            ) : (
                                <Link
                                    className={cn(styles.link, {
                                        [styles.active]: pathname === x.url,
                                    })}
                                    href={x.url}
                                    key={index}
                                    onClick={() => setVisibleNav(false)}
                                >
                                    {x.title}
                                </Link>
                            )
                        )}
                    </nav>
                    <div className={styles.details}>
                        <div className={styles.contact}>
                            {contact.map((x, index) => (
                                <div className={styles.element} key={index}>
                                    <div className={styles.category}>{x.title}</div>
                                    <div className={styles.text}>{x.content}</div>
                                </div>
                            ))}
                        </div>
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
                        <Link className={cn("button-stroke button-small", styles.button)} href="/">
                            Coming soon...
                        </Link>
                    </div>
                </div>
                <Link className={cn("button-stroke button-small", styles.button)} href="/">
                    Coming soon...
                </Link>
                <button
                    className={cn(styles.burger, {
                        [styles.active]: visibleNav,
                    })}
                    onClick={() => setVisibleNav(!visibleNav)}
                ></button>
            </div>
        </header>
    );
};

export default Headers;
