import '../styles/globals.css'
import Head from 'next/head'
import { NavBar, Footer } from "../components";

import "tailwindcss/tailwind.css";


function MyApp({ Component, pageProps }) {

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
