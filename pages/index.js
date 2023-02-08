import Head from 'next/head'
import Link from 'next/link'
import Advantage from '../components/common/Advantage'
import HealthyQuote from '../components/common/HealthyQuote'
import Hero from '../components/common/Hero'
import Navbar from '../components/shared/Navbar'


export default function Home() {

  return (
    <>
    <Head>
      <title>Home | GYM baran</title>
      <meta name="description" content= "GYM baran Healthy in side, Fresh Out Side." />
    </Head>
      <div>
        <Navbar />
        <Hero />
        <HealthyQuote />
        <Advantage />
      </div>
    </>
  )
}
