import Head from 'next/head';
import AboutPage from '../components/AboutPage';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Awning and Shades By Abe</title>
        <meta name="description" content="Learn about Awning and Shades By Abe - a family-owned business with over 15 years of experience creating premium shade solutions in Arizona." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutPage />
    </>
  );
}