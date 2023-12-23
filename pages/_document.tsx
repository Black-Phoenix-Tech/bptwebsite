// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
