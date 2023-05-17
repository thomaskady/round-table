import Image from 'next/image';
import Link from 'next/link';

import styles from './Nav.module.css';
import Button from "./Button";

export default function Nav() {

    return (
        <nav className={styles.nav}>
            <Link href='/'>
                <Image src='/round-table.png' alt='The Round Table Logo' width={100} height={100}></Image>
            </Link>
            <Button buttonType='signup'></Button>
        </nav>
    )
}