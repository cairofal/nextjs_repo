import Head from 'next/head'
import Image from 'next/image'
import styles from '../shared/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>All about NextJS</title>
      </Head>

      <main className={styles.main}>
        <header className={styles.main}>
        <h1 className={styles.title}>
          Yay! My next website!
        </h1>
        </header>
      </main>
    </div>
  )
}
