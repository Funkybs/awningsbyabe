import Head from 'next/head';
import AbeHomepage from '../components/AbeHomepage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Awning and Shades By Abe | Premium Shade Solutions in Arizona</title>
        <meta name="description" content="Premium custom shade and awning solutions for residential and commercial properties." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AbeHomepage />
    </>
  );
}