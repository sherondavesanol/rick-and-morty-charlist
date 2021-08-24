import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
      <>
        <Head >
          <title>Rick and Morty</title>
          <meta name="keywords" content="rick and morty" />
        </Head>

        <div>

          <h1 className={styles.title}>Home</h1>
          <p className={styles.text}>This is a Rick and Morty tribute webpage made using React.js & Next.js. Data is fetched and rendered from the Rick and Morty API.</p>
          <p className={styles.text}>This is a Rick and Morty tribute webpage made using React.js & Next.js. Data is fetched and rendered from the Rick and Morty API.</p>
          <p className={styles.text}>This is a Rick and Morty tribute webpage made using React.js & Next.js. Data is fetched and rendered from the Rick and Morty API.</p>
          <p className={styles.text}>This is a Rick and Morty tribute webpage made using React.js & Next.js. Data is fetched and rendered from the Rick and Morty API.</p>
          <p className={styles.text}>This is a Rick and Morty tribute webpage made using React.js & Next.js. Data is fetched and rendered from the Rick and Morty API.</p>

          <Link href="/characters/">
            <a className={styles.btn}>See Character List</a>
          </Link>

        </div>
      </>
  )
}