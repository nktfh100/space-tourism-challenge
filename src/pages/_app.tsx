import Layout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { barlow, barlowCondensed, bellefair } from '@/fonts'


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head >
        <title>Space Tourism Website</title>
        <meta name="description" content="Space Tourism Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout >
        <style jsx global>{`
          html, h5 {
            font-family: ${barlowCondensed.style.fontFamily};
          }
          h1,h2,h3,h4,button {
            font-family: ${bellefair.style.fontFamily};
          }
          p {
            font-family: ${barlow.style.fontFamily};
          }
        `}</style>
        <Component {...pageProps} />
      </Layout >
    </ >
  )
}
