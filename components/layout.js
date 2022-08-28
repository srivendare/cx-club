import styles from '../styles/Layout.module.css'

export default function Layout({ children }) {
    return (
        <div>
            <div className={styles.navbar}>
                <div>CX CLUB</div>
                <div className={styles.search}>搜索</div>
                <div>Connect wallet</div>
            </div>

            {children}
        </div>
    );
}
  