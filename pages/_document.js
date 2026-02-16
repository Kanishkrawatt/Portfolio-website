import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html
        lang="en"
        className="scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        <Head>
          <meta
            name="description"
            content="I'm a Full Stack Developer,Programmer from India. I have great intrest coding.  "
          />

          <meta
            name="keywords"
            content="Kanishk, Rawat, Portfolio, ikanishk, Kanishkrawatt,KANISHK,k_a_n_i_s_h_k_r_a_w_a_t,KANISHKRAWAT"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="1 days" />
          <meta name="author" content="Kanishk rawat" />
          <meta name="theme-color" content="#000000" />

          <meta
            property="twitter:image"
            content="https://firebasestorage.googleapis.com/v0/b/portfolio-cb414.appspot.com/o/img.jpeg?alt=media&token=a6b5b574-23e6-4224-b77d-ecca0a94bc25"
          />
          <meta name="google-adsense-account" content="ca-pub-3044813027595870"></meta>
          <meta
            property="twitter:title"
            content="Kanishk Rawat Twitter Profile"
          ></meta>
          <meta
            property="twitter:description"
            content="Kanishk Rawat | Full Stack Developer,Programmer from India. I have great intrest coding. "
          ></meta>
          <meta name="msapplication-navbutton-color" content="#000000" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#000000"
          />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-TileImage" content="/logo.png" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="application-name" content="Kanishk Rawat" />
          <meta name="msapplication-tooltip" content="Kanishk Rawat" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="msapplication-task" content="name=Home;action-uri=/" />
          <meta
            name="msapplication-task"
            content="name=About;action-uri=/about"
          />
          <meta
            name="msapplication-task"
            content="name=Project;action-uri=/project"
          />
          <meta
            name="msapplication-task"
            content="name=Contact;action-uri=/contact"
          />
          <meta
            name="msapplication-task"
            content="name=Skills;action-uri=/skills"
          />
          <meta
            name="msapplication-task"
            content="name=Experience;action-uri=/experience"
          />
          <meta name="msapplication-TileImage" content="/logo.png" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-square70x70logo" content="/logo.png" />
          <meta name="msapplication-square150x150logo" content="/logo.png" />
          <meta name="msapplication-wide310x150logo" content="/logo.png" />
          <meta name="msapplication-square310x310logo" content="/logo.png" />
          <meta
            name="msapplication-notification"
            content="frequency=30;polling-uri=https://notifications.buildmypinnedsite.com/?feed=https://ikanishk.vercel.app/rss.xml&amp;id=1;polling-uri2=https://notifications.buildmypinnedsite.com/?feed=https://ikanishk.vercel.app/rss.xml&amp;id=2;polling-uri3=https://notifications.buildmypinnedsite.com/?feed=https://ikanishk.vercel.app/rss.xml&amp;id=3;polling-uri4=https://notifications.buildmypinnedsite.com/?feed=https://ikanishk.vercel.app/rss.xml&amp;id=4;polling-uri5=https://notifications.buildmypinnedsite.com/?feed=https://ikanishk.vercel.app/rss.xml&amp;id=5;cycle=1"
          />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@ikanishk" />
          <meta name="twitter:creator" content="@ikanishk" />
          <meta property="og:url" content="https://ikanishk.vercel.app/" />
          <meta property="og:title" content="Kanishk Rawat" />
          <meta
            property="og:description"
            content="I'm a Full Stack Developer,Programmer from India. I have great intrest coding.  "
          />
          <meta property="og:image" content="/logo.png" />
          <meta property="og:site_name" content="Kanishk Rawat" />
          <meta property="og:locale" content="en_US" />

          <link rel="icon" href="/logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&family=Libre+Barcode+39+Text&family=Megrim&family=Rum+Raisin&display=swap"
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
