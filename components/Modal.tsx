import styles from './Modal.module.css'

export default function Modal() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <button className={styles.button}>Continue</button>
            </div>
        </div>
    ) 
}