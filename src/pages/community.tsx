import type { NextPage } from 'next'
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Community: NextPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.grid}>Community 加入 Description 发帖</div>

            <div className={styles.grid}>帖子 搜索 交易大厅</div>
            <div className={styles.card}>
                <Link href="/post">Example post</Link>
            </div>
            <div className={styles.card}>
                <Link href="/proposal">Example proposal</Link>
            </div>
            <div className={styles.card}>
                <Link href="/saleitem">Example sale item</Link>
            </div>

            <div className={styles.grid}>My profile</div>

            <div className={styles.grid}>生效中的提案</div>
            <div className={styles.card}>
                <Link href="/proposal">Example proposal</Link>
            </div>

            <div className={styles.grid}>发帖区域</div>
        </main>
    )
}
export default Community;
