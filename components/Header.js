// react / next
import Link from 'next/link'

// styles
import styles from '../styles/CompHeader.module.scss'

const Header = ({ layout }) => {
    const classes = `${styles.ul} ${layout === 'main' ? styles.paddingBottom1rem : ''} `

    const menuItems = [
        {
            page: 'home',
            url: '/',
            key: 0
        },
        {
            page: 'content library',
            url: '/library',
            key: 1
        }
    ]

    const mainNav = menuItems.map(item => {
        return (
            <li className={styles.li} key={item.key}>
                <Link href={item.url}>
                    <a>{item.page}</a>
                </Link>
            </li>
        )
    })

    return (
        <nav className={styles.nav}>
            <ul className={classes}>
                {mainNav}
            </ul>
        </nav>
    )
}

export default Header