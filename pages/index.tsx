import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HomeMF from "../src/Home/Home";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Front HOST</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomeMF />
      </main>
    </div>
  )
}

export default Home
