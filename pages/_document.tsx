// export { Document as default } from "@makeswift/runtime/next";

import { Head, Html, Main, NextScript } from "next/document";
import { Document, PreviewModeScript } from "@makeswift/runtime/next";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* @ts-ignore */}
          <PreviewModeScript isPreview={this.props.__NEXT_DATA__.isPreview} />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

export default MyDocument;
