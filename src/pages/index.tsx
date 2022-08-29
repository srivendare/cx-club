import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div>
            <div className={styles.recommended_banner}>
                推荐社区
                <Link href="/community">
                    <div className={styles.recommended_banner_item}>
                        Example community
                    </div>
                </Link>
            </div>

            <div className={styles.home_content}>
                <div className={styles.home_content_posts}>
                    <div className={styles.home_content_posts_tab}>
                        热门/我的
                    </div>
                    <div className={styles.home_content_posts_list}>
                        <Link href="/post">
                            <div className={styles.home_content_posts_listitem}>
                                Example post
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={styles.home_content_top_communities}>
                    Top 10 communities
                    <Link href="/community">
                        <div
                            className={styles.home_content_top_communities_item}
                        >
                            community1
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
