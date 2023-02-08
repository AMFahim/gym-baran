import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'


export default function Home() {

  return (
    <>
    <Head>
      <title>Home | GYM baran</title>
      <meta name="description" content= "GYM baran Healthy in side, Fresh Out Side." />
    </Head>
      <div>
        <Navbar />
      </div>
    </>
  )
}
