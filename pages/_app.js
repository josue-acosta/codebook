// react / next
import Head from 'next/head'

// components
import Header from '../components/Header'
import Layout from '../components/Layout'

// styles
import '../styles/PageApp.scss'
import styles from '../styles/CompLayout.module.scss'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>Josue Acosta | Codebook</title>
                <meta name="description" content="A book of my personal how-to's" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200;400;600&display=swap');
                </style>
            </Head>
            <Header />
            <Component {...pageProps} />
            <footer className={styles.footer}>&copy; josue acosta 20XX</footer>
            <script src={require(`../js/syntax-highlighter.js`)} defer></script>
        </Layout>
    )

}

export default MyApp
