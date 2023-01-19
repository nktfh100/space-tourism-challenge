import { motion } from "framer-motion"
import styles from "./Header.module.css"

export default function Header({ pageNum, title }: { pageNum: string, title: string }) {
    return (
        <motion.div
            key={pageNum}
            className={styles.headerContainer}
            initial={{
                x: -50,
                opacity: 0,
            }}
            animate={{
                x: 0,
                opacity: 1,
            }}
            transition={{ ease: "easeOut", duration: 0.2 }}
        >
            <h5 className={styles.pageNum}>{pageNum}</h5>
            <h5 className={styles.title}>{title}</h5>
        </motion.div>
    )
}