// styles
import styles from '../styles/CompCode.module.scss'

/*
https://www.sitepoint.com/best-practice-for-code-examples/
https://stackoverflow.com/questions/41306797/html-how-to-add-line-numbers-to-a-source-code-block
https://clt.champlain.edu/kb/inserting-code-snippets/
https://sylvaindurand.org/using-css-to-add-line-numbering/
https://www.taniarascia.com/adding-syntax-highlighting-to-code-snippets/
https://prismjs.com/
https://getpublii.com/docs/highlight-your-code-syntax-with-prism-js.html
https://css-tricks.com/syntax-highlighting-prism-on-a-next-js-site/
https://dev.to/aslemammad/javascript-dynamic-imports-next-js-14c0
<pre className={`${styles.pre} ${classes}`}>

</pre>
https://www.codingem.com/export-multiple-functions-in-javascript
*/

const Code = ({ language, source}) => {
    const classes = language === 'code' ? styles.code : styles.console

    return (
    <div className={styles.codeWrapper}>
        <div></div>
        <pre className={`${styles.pre} ${classes}`}>
            {source}
        </pre>
        <div></div>
    </div>
    )
}

export default Code