import Head from 'next/head'
import Header from '../components/Header'
import Summary from '../components/Summary'
import Today from '../components/Today'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS Movie App with Tailwind</title>
        <meta property="og:title" content="Social Media Dashboard made with NextJS & Tailwind" key="title" />
        <meta property="og:description" content="Social Media Dashboard made with NextJS & Tailwind deployed on Vercel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Summary />
      <Today />

    </>
  )
}
