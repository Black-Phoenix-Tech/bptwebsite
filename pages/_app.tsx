import React, { Suspense, useEffect } from "react";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import Head from "next/head";
import ClientOnly from "src/components/ClientOnly";
import { useRouter } from "next/router";
import Page from "../src/components/Page";
import "src/styles/app.sass";
import { analytics } from "../firebase";

const Script = dynamic(() => import("next/script"), {
    suspense: true,
});

const AppWithTheme = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        try {
            (analytics as any)?.logEvent("visit website", { param: "all" });
        } catch (error) {}
    }, []);
    // useEffect(() => {
    //     if ("serviceWorker" in navigator) {
    //         navigator.serviceWorker
    //             .register("/service-worker.js")
    //             .then((registration) => {
    //                 console.log("Service Worker registered with scope:", registration.scope);
    //             })
    //             .catch((error) => {
    //                 console.error("Service Worker registration failed:", error);
    //             });
    //     }
    // }, []);

    return (
        <Suspense>
            <Page>
                <Component {...pageProps} />
            </Page>
        </Suspense>
    );
};
// eslint-disable-next-line
declare type AppInitialProps<P = any> = {
    pageProps: P;
    Component: P;
};

const MyApp = ({ Component, pageProps }: AppInitialProps) => {
    return (
        <>
            <Head>
                {/* <meta charset="utf-8" /> */}
                <title>Black Phoenix</title>
                <meta property="og:title" content="Black Phoenix" />
                <meta property="og:url" content="https://blackphoenix.ca" />
                <meta
                    property="og:description"
                    content="Black Phoenix Tech, Black Phoenix Falcon app, Black Phoenix, blackphoenix"
                />
                <meta
                    content="Black Phoenix Tech, Black Phoenix Falcon app, Black Phoenix, blackphoenix"
                    name="description"
                />
                <meta content="Black Phoenix: It's all about you" property="og:title" />
                <meta
                    content="Black Phoenix Tech, Black Phoenix Falcon app, Black Phoenix, blackphoenix"
                    property="og:description"
                />
                <meta content="%PUBLIC_URL%/favicon-32x32.png" property="og:image" />
                <meta property="og:url" content="https://blackphoenix.ca" />
                <meta property="og:site_name" content="Black Phoenix: It's all about you" />
                <meta content="Black Phoenix: Website UI Kit" property="twitter:title" />
                {/* falcon app desc */}
                <meta content="Premium Web UI Kit for Fitness Experience" property="twitter:description" />
                <meta content="%PUBLIC_URL%/twitter-card.png" property="twitter:image" />
                <meta property="og:type" content="website" />
                <meta content="summary" name="twitter:card" />
                <meta name="twitter:site" content="@blackphoenix" />
                <meta name="twitter:creator" content="@blackphoenix" />
                <meta property="fb:admins" content="132951670226590" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png" />
                <link rel="manifest" href="%PUBLIC_URL%/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <Script
                    src="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                    strategy="afterInteractive"
                />
                <style>{`
    @font-face {
      font-family: "SFProDisplay-Bold";
      src: url("/fonts/SFProDisplay-Bold.woff2") format("woff2"), url("/fonts/SFProDisplay-Bold.woff") format("woff");
    }
    `}</style>
            </Head>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_API_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GOOGLE_ANALYTICS_API_ID}');
        `}
            </Script>
            <Script>
                {`(function () {
      // Change these if you use something different in your hook.
      var storageKey = 'darkMode';
      var classNameDark = 'dark-mode';
      var classNameLight = 'light-mode';

      function setClassOnDocumentBody(darkMode) {
        document.body.classList.add(darkMode ? classNameDark : classNameLight);
        document.body.classList.remove(darkMode ? classNameLight : classNameDark);
      }

      var preferDarkQuery = '(prefers-color-scheme: dark)';
      var mql = window.matchMedia(preferDarkQuery);
      var supportsColorSchemeQuery = mql.media === preferDarkQuery;
      var localStorageTheme = null;
      try {
        localStorageTheme = localStorage.getItem(storageKey);
      } catch (err) { }
      var localStorageExists = localStorageTheme !== null;
      if (localStorageExists) {
        localStorageTheme = JSON.parse(localStorageTheme);
      }

      // Determine the source of truth
      if (localStorageExists) {
        // source of truth from localStorage
        setClassOnDocumentBody(localStorageTheme);
      } else if (supportsColorSchemeQuery) {
        // source of truth from system
        setClassOnDocumentBody(mql.matches);
        localStorage.setItem(storageKey, mql.matches);
      } else {
        // source of truth from document.body
        var isDarkMode = document.body.classList.contains(classNameDark);
        localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
      }
    })();`}
            </Script>
            <ClientOnly>
                <AppWithTheme Component={Component} pageProps={pageProps} {...pageProps} />
            </ClientOnly>
        </>
    );
};

/*
  this function can report web vitals like FCP and LCP
**/
// export function reportWebVitals(metric: NextWebVitalsMetric) {
//   console.log(metric);
// }

export default MyApp;
