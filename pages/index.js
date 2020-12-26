import Head from 'next/head'
import Layout from '../components/layout'
import favicon from '../public/favicon.ico'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kaguwo's Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href={favicon} />
      </Head>
      
      <NextSeo
      openGraph={{
        type: 'website',
        url: 'https://www.kaguwo.js.org',
        title: 'Kaguwo\'s Portfolio',
        description: 'A neoterically designed portfolio, made with Next.JS and Tailwind CSS. Check out this website source on Github!',
      }}
    />
        
      <Layout />
    </div>
  )
}
