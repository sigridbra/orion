import '../styles/globals.css'
import Head from 'next/head'
import { NavBar, Footer } from "../components";
import ReactGA from 'react-ga';
import "tailwindcss/tailwind.css";


function MyApp({ Component, pageProps }) {


  
  const trackingId = "UA-187928555-1"; // Replace with your Google Analytics tracking ID
  ReactGA.initialize(trackingId);

  return (
    <div className="antialiased min-h-screen relative flex flex-col">
      <Head>
        <title>Orion Revisjon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="flex-auto">
        <Component  {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp
