'use client';

import styles from './page.module.css'
import { motion } from 'framer-motion';


export default function Home() {
  // We split this title in the JSX and render a span for each word to get a staggered, random animation.
  const title = 'Empowering Parents to Forge Legendary Connections with Their Children'

  const generateRandomY = () => Math.floor(Math.random() * 350 + 100) *-1;
  const generateRandomTime = () => Math.floor(Math.random() * 1.1) + 1;
  const generateRandomRotation = () => Math.floor(Math.random() * 180);

  const createAnimation = () => {
    return {initial: {opacity: 0, y: generateRandomY(), rotate: generateRandomRotation()}, animate: {opacity: 1, y: 0, rotate: 0}, transition: {duration: generateRandomTime()}};
  }


  return (
    <main className={styles.main}> 
      <section className={styles.section}>
        <h1 className={styles.header}>
          {title.split(' ').map((word) => {
            const animation = createAnimation();
            return (
              <motion.span key={word} {...animation}>{word}&nbsp;</motion.span>
            )
          })}
        </h1>
        <motion.p className={styles.textContent} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2.1}}>
          Explore new worlds. Strengthen your bonds. Record your own myths.
        </motion.p>
      </section>
    </main>
  )
}
