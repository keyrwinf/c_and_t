import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts for Spartan */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap"
        />
      </Head>
      <body className="m-0 p-0 w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
