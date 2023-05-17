import styles from './page.module.css';

export default function SignUp() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <label htmlFor='username'>Username:</label>
                        <input  type='text' id='username' name='username' required></input>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' name='password' required></input>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor='number'>Phone Number:</label>
                        <input type='tel' id='number' name='number' required placeholder='+1XXXXXXXXXX'></input>
                    </div>
                    <button className={styles.button}>Sign up</button>
                </div>
            </form>
        </div>
    )
}