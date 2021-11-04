import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
   
    render() {
        return (
            <Html lang='en-GB'>
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="apple-touch-icon" href="/pheon-dev-white.png" />
                    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}