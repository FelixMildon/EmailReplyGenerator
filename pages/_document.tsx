import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next email reply in seconds."
          />
          <meta property="og:site_name" content="npcreply.com" />
          <meta
            property="og:description"
            content="Generate your next email reply in seconds."
          />
          <meta property="og:title" content="Email reply Generator" />
          <meta name="email:card" content="summary_large_image" />
          <meta name="email:title" content="Email reply Generator" />
          <meta
            name="twitter:description"
            content="Generate your next Email email in seconds."
          />
          <meta
            property="og:image"
            content="https://npcreply.com/og-image.png"
          />
          <meta
            name="email:image"
            content="https://npcreply.com/og-image.png"
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
