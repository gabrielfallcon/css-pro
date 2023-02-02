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
          href="/images/css-logo.png"
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
        <meta name="description" content="Aprenda CSS com os melhores profissionais da indústria. O CSS Pro da DevAjuda oferece cursos completos e práticos para tornar você um especialista em CSS." />
        <meta name="keywords" content="CSS, frontend, desenvolvimento web, CSS Pro, curso de CSS, DevAjuda, Dev Ajuda" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="CSS Pro" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>CSS-PRO - Curso de CSS para iniciantes</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
