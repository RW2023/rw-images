import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width" />
          <meta
            name="description"
            content="Explore the captivating world of Ryan Wilson's photography. Discover stunning landscapes, urban scenes, and creative portraits in this comprehensive photography portfolio."
          />
          <meta name="author" content="Ryan Wilson" />
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="Professional Photography, Artistic Photography, Landscape Photography, Urban Photography, Creative Portraits, Fine Art Photography, Street Photography, Event Photography, One Off Project Photography, Product Photography, Ryan Wilson Photographer, High-Quality Photography, Nature Photography, Photography Art, Photography Portfolio, Ryan Wilson Gallery"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
            rel="stylesheet"
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
