import Head from 'next/head';
import ResidentialPage from '../components/ResidentialPage';

export default function Residential() {
  return (
    <>
      <Head>
        <title>Residential Shade Solutions | Awning and Shades By Abe</title>
        <meta name="description" content="Transform your Arizona home with premium custom shade solutions for patios, pools, carports, and recreational areas. Beautiful, functional outdoor living spaces." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResidentialPage />
    </>
  );
}