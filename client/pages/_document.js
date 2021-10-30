import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link
            rel='icon'
            type='image/png'
            href='/static/images/New/new-link-fa.png'
          />
          <link
            href='https://use.fontawesome.com/releases/v5.3.1/css/all.css'
            rel='stylesheet'
            type='text/css'
          />
          <link
            rel='stylesheet'
            href='//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.css'
          />
          <link
            rel='stylesheet'
            href='//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css'
          />
          <script src='//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js' />
          <script src='//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js' />
          <script src='//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.min.js' />
          <script src='/static/js/jquery-3.2.1.min.js' />
          <script src='/static/js/app.js' />
          <link
            href='https://fonts.cdnfonts.com/css/dm-sans'
            rel='stylesheet'
          />

          <link
            rel='stylesheet'
            type='text/css'
            href='//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css'
          />

          <link
            rel='stylesheet'
            type='text/css'
            href='//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
