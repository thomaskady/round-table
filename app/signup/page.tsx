//@ts-ignore
'use client';

import styles from './page.module.css';
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Modal from '@/components/Modal';

export default function SignUp() {
    const [formIsInvalid, setFormIsInvalid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const userRef = useRef(null);
    const numberRef = useRef(null);
    const carrierRef = useRef(null);

    const signUpButtonHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        if (numberRef.current!.value && carrierRef.current!.value && userRef.current!.value) {
            console.log(numberRef.current!.value, carrierRef.current!.value, userRef.current!.value);
            setFormIsValid(true);
        } else {
            setFormIsInvalid(true);
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <label htmlFor='username'>Username:</label>
                        <input ref={userRef}  type='text' id='username' name='username' required></input>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' name='password' required></input>
                    </div>
                    <div className={styles.input}>
                        <label htmlFor='number'>Phone Number:</label>
                        <input ref={numberRef} type='tel' id='number' name='number' required placeholder='+1XXXXXXXXXX'></input>
                    </div>
                    <div className={styles.input}>
                        <select ref={carrierRef} className={styles.select} name='carrier' id='carrier'>
                            <option value=''>Please select your carrier</option>
                            <option value='att'>AT&T</option>
                            <option value='tmobile'>T-Mobile</option>
                            <option value='verizon'>Verizon</option>
                        </select>
                    </div>
                    <button className={styles.button} onClick={signUpButtonHandler}>Sign up</button>
                    {formIsInvalid && <p>Please make sure to fill out all inputs</p>}
                    {formIsValid && 
                    <Link href={{pathname: '/profile', query: {username: userRef.current.value, phone: numberRef.current.value, carrier: carrierRef.current.value}}}>
                        <Modal></Modal>
                    </Link>}
                </div>
            </form>
        </div>
    )
}