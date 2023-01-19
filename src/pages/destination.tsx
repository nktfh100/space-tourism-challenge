import Header from '@/components/header/Header'
import { barlowCondensed, bellefair } from '@/fonts'
import styles from '@/styles/Destination.module.css'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'

const data: { name: string, image: string, description: string, distance: string, travel: string }[] = [
  {
    "name": "Moon",
    "image": "/moon.webp",
    "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    "distance": "384,400 km",
    "travel": "3 days"
  },
  {
    "name": "Mars",
    "image": "/mars.webp",
    "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    "distance": "225 mil. km",
    "travel": "9 months"
  },
  {
    "name": "Europa",
    "image": "/europa.webp",
    "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    "distance": "628 mil. km",
    "travel": "3 years"
  },
  {
    "name": "Titan",
    "image": "/titan.webp",
    "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    "distance": "1.6 bil. km",
    "travel": "7 years"
  }
]

export default function Destination() {

  const [activePlanet, setActivePlanet] = useState("Moon");

  const activePlanetData = data.find((ele) => ele.name == activePlanet);

  useEffect(() => {
    // preload all the images
    data.forEach((ele) => {
      const img = new Image();
      img.src = ele.image;
    });
  }, []);

  return (
    <div className={styles.pageContainer} >
      <Header pageNum={'01'} title={'Pick your destination'} />
      <div className={styles.contentContainer}>
        <motion.img
          className={styles.planetImg}
          key={activePlanet + "img"}
          src={activePlanetData?.image}
          alt="Planet image"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.3 }}
        />

        <div className={styles.planetContentContainer}>

          <nav className={styles.planetsNav} aria-label="Planets navigation">
            <ul>
              {data.map((ele) => {
                return (
                  <li key={ele.name} className={styles.planetNavEle + " " + (ele.name == activePlanetData?.name ? styles.planetNavEleActive : "")}>
                    <button aria-label={ele.name} className={barlowCondensed.className} onClick={() => setActivePlanet(ele.name)}>{ele.name}</button>
                  </li>
                )
              })}
            </ul>
          </nav>

          <motion.h2
            className={styles.title}
            key={activePlanet + "h2"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
            {activePlanetData?.name}
          </motion.h2>
          <motion.p
            className={styles.desc}
            key={activePlanet + "p"}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
            {activePlanetData?.description}
          </motion.p>
          <div className={styles.infoContainer}>
            <PlanetInfo title="AVG. DISTANCE" text={activePlanetData?.distance} />
            <PlanetInfo title="Est. travel time" text={activePlanetData?.travel} />
          </div>
        </div>
      </div>
    </div>
  )
}


function PlanetInfo({ title, text }: { title: string | undefined, text: string | undefined }) {
  return (
    <motion.div
      className={styles.planetInfoEle}
      key={text}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
    >
      <p className={barlowCondensed.className}>{title}</p>
      <motion.p className={bellefair.className}>{text}</motion.p>
    </motion.div>
  )
}