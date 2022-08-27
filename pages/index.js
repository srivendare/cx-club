import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CX CLUB</title>
        <meta name="description" content="cx club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p>CX CLUB</p>
          </div>
          <div className={styles.card}>
            <p>搜索</p>
          </div>
          <div className={styles.card}>
            <p>Connect wallet</p>
          </div>
        </div>

        <div className={styles.description}>
          <h2>推荐社区</h2>
          <div className={styles.card}>
            <Link href="/community" className={styles.card}>
              Example community
            </Link>
          </div>
        </div>

        <div className={styles.description}>
          <h2>热门/我的</h2>
          <div className={styles.card}>
            <Link href="/post" className={styles.card}>
              Example post
            </Link>
          </div>
        </div>

        <div className={styles.description}>
          <p>Top 10 communities</p>
          <Link href="/community" className={styles.card}>
            community1
          </Link>
        </div>
      </main>
    </div>
  )
}
