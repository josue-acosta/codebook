// react / next
import Link from 'next/link'

// styles
import styles from '../styles/CompCard.module.scss'

const Card = ({ subjectTitle, categoryImg, description, url }) => {

    return (
        <Link href={url}>
            <a className={styles.cardWrapper}>
                <div className={styles.titleWrapper}>
                    <div className={styles.subjectTitle}>{subjectTitle}</div>
                    <img className={styles.categoryImg} src={categoryImg} />
                </div>

                <p className={styles.description}>{description}</p>
            </a>
        </Link>
    )
}

export default Card