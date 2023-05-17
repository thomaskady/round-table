import Image from 'next/image';

import styles from './Nav.module.css';
import Button from "./Button";

export default function Nav() {

    return (
        <nav className={styles.nav}>
            <Image src='/round-table.png' alt='The Round Table Logo' width={100} height={100}></Image>
            <Button buttonType='signup'></Button>
        </nav>
    )
}