import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="/images/forma-front.png"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta charSet="UTF-8"/>
        <meta name="description" content="Desenvolva seu maior potencial com o Forma Front e torne-se um dev de destaque!" />
        <meta name="keywords" content="CSS, frontend, desenvolvimento web, Forma Front, curso de CSS, DevAjuda, Dev Ajuda" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Forma Front" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Forma Front - Curso de front-end para iniciantes</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
