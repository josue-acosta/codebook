// styles
import styles from '../styles/CompPageTitle.module.scss'

const PageTile = ({ pageTitle }) => {
    return (
        <div className={styles.pageTitle}>
            <div className={styles.pageTile__text}>
                <h1 className={styles.pageTitle__title}>{pageTitle}</h1>
            </div>
        </div>
    )
}

export default PageTile