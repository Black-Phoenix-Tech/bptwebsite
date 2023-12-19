import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { clearAllBodyScrollLocks } from "body-scroll-lock";
import styles from "./Page.module.sass";
import Header from "../Header";
import Footer from "../Footer";

const Page = ({ children }) => {
    const { pathname } = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
        clearAllBodyScrollLocks();
    }, [pathname]);

    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.inner}>{children}</div>
            <Footer />
        </div>
    );
};

export default Page;
