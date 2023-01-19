import Header from "@/components/header/Header"
import useWindowSize from "@/hooks/useWindowSize"
import styles from "@/styles/Technology.module.css"
import { useState } from "react"
import { motion } from "framer-motion"

const data: { name: string, images: { portrait: string, landscape: string }, description: string }[] = [
  {
    "name": "Launch vehicle",
    "images": {
      "portrait": "/launch-vehicle-portrait.jpg",
      "landscape": "/launch-vehicle-landscape.jpg"
    },
    "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
  },
  {
    "name": "Spaceport",
    "images": {
      "portrait": "/spaceport-portrait.jpg",
      "landscape": "/spaceport-landscape.jpg"
    },
    "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
  },
  {
    "name": "Space capsule",
    "images": {
      "portrait": "/space-capsule-portrait.jpg",
      "landscape": "/space-capsule-landscape.jpg"
    },
    "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  }
]

export default function Technology() {

  const [activeTech, setActiveTech] = useState("Launch vehicle");

  const activeTechData = data.find((ele) => ele.name == activeTech);

  const { width, height } = useWindowSize();

  const isTablet = width <= 1010;

  return (
    <div className={styles.pageContainer}>
      <Header pageNum={'03'} title={'Space launch 101'} />
      <div className={styles.pageContentContainer}>
        <div className={styles.left}>
          <nav className={styles.nav} aria-label="Technology navigation">
            <ul>
              {data.map((ele, i) => {
                return (
                  <li key={ele.name} className={styles.techNavItem + " " + (activeTech == ele?.name ? styles.techNavItemActive : "")}>
                    <button aria-label={ele.name} onClick={() => setActiveTech(ele.name)}>{i + 1}</button>
                  </li>
                )
              })}
            </ul>
          </nav>
          <motion.div
            className={styles.contentContainer}
            key={activeTech + "content"}
            initial={{ opacity: 0, x: isTablet ? 0 : -50, y: isTablet ? 50 : 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
            <h5 className={styles.terminology}>THE TERMINOLOGY…</h5>
            <h3 className={styles.title}>{activeTechData?.name}</h3>
            <p className={styles.desc}>{activeTechData?.description}</p>
          </motion.div>
        </div>
        <motion.div
          className={styles.right}
          key={activeTech + "img"}
          initial={{ opacity: 0, y: isTablet ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          <picture>
            <source media="(max-width: 1010px)" srcSet={activeTechData?.images.landscape} />
            <img src={activeTechData?.images.portrait} alt={activeTechData?.name} />
          </picture>
        </motion.div>
      </div>
    </div>
  )
}
