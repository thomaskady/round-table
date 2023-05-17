'use client';

import {useSearchParams} from 'next/navigation';
import styles from './page.module.css';

export default function Profile() {
    const searchParams = useSearchParams();
    const username = searchParams.get('username')

    const requestButtonHandler = async () => {
        const data = await fetch('/api/mailgun');
        const result = await data.json();
        console.log(result);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.welcome}>Welcome {username}</h1>
            <button className={styles.button} onClick={requestButtonHandler}>Request activity</button>
        </div>
    )
}