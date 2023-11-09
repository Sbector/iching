import styles from './Question.module.css'

export default function question() {
    return (
        <div>
            <label htmlFor="question">Enter your question </label><br/>
            <textarea className={styles.input} type="text" id="questionBox" name="question"/><br/><br/>
        </div>
    )
}