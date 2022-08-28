import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/layout';

export default function Community() {
    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.grid}>
                    Community 加入
                    Description
                    发帖
                </div>

                <div className={styles.grid}>
                    帖子 搜索 交易大厅
                </div>
                <div className={styles.card}>
                    <Link href="/post">Example post</Link>
                </div>
                <div className={styles.card}>
                    <Link href="/proposal">Example proposal</Link>
                </div>
                <div className={styles.card}>
                    <Link href="/sale">Example sale</Link>
                </div>

                <div className={styles.grid}>
                    My profile
                </div>

                <div className={styles.grid}>
                    生效中的提案
                </div>
                <div className={styles.card}>
                    <Link href="/proposal">Example proposal</Link>
                </div>

                <div className={styles.grid}>
                    发帖区域
                </div>
            </main>
        </Layout>
    );
}
