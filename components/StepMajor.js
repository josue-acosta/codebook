// styles
import styles from '../styles/CompSteps.module.scss'

const StepMajor = ({ step, sentence, direction, sideNote, filePath }) => {

    const classes = sideNote === '' ? '' : styles.sideNote
    const hasFilePath = filePath === '' ? '' : <code className={styles.filePath}>{filePath}</code>

    return (
        <div className={styles.majorStepWrapper}>
            <p className={styles.step}>{step}</p>
            <div>
                <div className={styles.sentence}>{sentence}</div>
                {hasFilePath}
                <p>{direction}</p>
            </div>
            <p>
                <span className={classes}>{sideNote}</span>
            </p>
        </div>
    )
}

export default StepMajor