import Document, { Html, Head, Main, NextScript } from "next/document";
import { LoaderPrimitive } from "../components/base/primitive/loader";

class MasterDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&family=Poppins:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <LoaderPrimitive id="loader" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MasterDocument;
