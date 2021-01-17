import '../styles/globals.css'
import Head from 'next/head'
import {  NavBar, Footer } from "../components";

import styles from '../styles/Home.module.css'



function MyApp({ Component, pageProps }) {

  return (
    <div className="antialiased min-h-screen relative">
    <Head>
    <title>Orion Revisjon</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <NavBar />
  <Component {...pageProps} />

  <Footer />
  </div>
  )
}

export default MyApp
