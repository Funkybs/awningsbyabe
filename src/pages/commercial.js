import Head from 'next/head';
import CommercialPage from '../components/CommercialPage';

export default function Commercial() {
  return (
    <>
      <Head>
        <title>Commercial Shade Solutions | Awning and Shades By Abe</title>
        <meta name="description" content="Custom engineered commercial shade solutions for car washes, hip structures, shade sails, and more. Built for Arizona's demanding climate." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommercialPage />
    </>
  );
}