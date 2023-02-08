import Head from 'next/head'
import Advantage from '../components/common/Advantage'
import HealthyQuote from '../components/common/HealthyQuote'
import Hero from '../components/common/Hero'
import Workout from '../components/common/Workout'
import Navbar from '../components/shared/Navbar'


export default function Home() {

  return (
    <>
    <Head>
      <title>Home | GYM baran</title>
      <meta name="description" content= "GYM baran Healthy in side, Fresh Out Side." />
    </Head>
      <div className='bg-primary-bg'>
        <Navbar />
        <Hero />
        <HealthyQuote />
        <Advantage />
        <Workout />
      </div>
    </>
  )
}
