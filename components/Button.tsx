import { ReactPropTypes } from "react";
import styles from './Button.module.css';

import Link from "next/link";

export default function Button(props: {buttonType: string}) {
    const {buttonType} = props;

    return (<Link href={`/${buttonType}`}>
        <button className={styles.button}>Sign Up</button>
    </Link>)
}