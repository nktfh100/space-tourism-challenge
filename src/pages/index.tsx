import styles from '@/styles/Home.module.css'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { barlow } from '@/fonts';

export default function Home() {

  return (
    <div className={styles.pageContainer}>
      <motion.div
        className={styles.left}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      >
        <h5>So, you want to travel to</h5>
        <h1>space</h1>
        <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </motion.div>
      <div className={styles.right}>
        <motion.div
          className={styles.btnContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          <Link href={"/destination"} className={barlow.className}>explore</Link>
        </motion.div>
      </div>
    </div>
  )
}
