// styles
import styles from '../styles/CompLayout.module.scss'

export default function LandingPageLayout({ children }) {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}