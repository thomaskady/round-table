'use client';

import { create } from 'domain';
import styles from './page.module.css'
import { motion } from 'framer-motion';

export default function Home() {

  const generateRandomY = () => Math.floor(Math.random() * 350 + 100) *-1;
  const generateRandomTime = () => Math.floor(Math.random() * 1.1) + 1;
  const generateRandomRotation = () => Math.floor(Math.random() * 180);

  const createAnimation = () => {
    return {initial: {opacity: 0, y: generateRandomY(), rotate: generateRandomRotation()}, animate: {opacity: 1, y: 0, rotate: 0}, transition: {duration: generateRandomTime()}};
  }

  const title = 'Empowering Parents to Forge Legendary Connections with Their Children'

  return (
    <main className={styles.main}> 
      <section className={styles.section}>
        <h1 className={styles.header}>
          {title.split(' ').map((word) => {
            const animation = createAnimation();
            return (
              <motion.span {...animation}>{word}&nbsp;</motion.span>
            )
          })}
        </h1>
      </section>
    </main>
  )
}
