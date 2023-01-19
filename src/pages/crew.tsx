import Header from "@/components/header/Header"
import styles from "@/styles/Crew.module.css"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const data: { name: string, image: string, role: string, bio: string }[] = [
  {
    "name": "Douglas Hurley",
    "image": "/douglas-hurley.webp",
    "role": "Commander",
    "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  },
  {
    "name": "Mark Shuttleworth",
    "image": "/mark-shuttleworth.webp",
    "role": "Mission Specialist",
    "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    "name": "Victor Glover",
    "image": "/victor-glover.webp",
    "role": "Pilot",
    "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    "name": "Anousheh Ansari",
    "image": "/anousheh-ansari.webp",
    "role": "Flight Engineer",
    "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
]

export default function Crew() {

  const [activeCrew, setActiveCrew] = useState("Douglas Hurley");

  const activeCrewData = data.find((ele) => ele.name == activeCrew);

  useEffect(() => {
    // preload all the images
    data.forEach((ele) => {
      const img = new Image();
      img.src = ele.image;
    });
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Header pageNum={'02'} title={'Meet your crew'} />
      <div className={styles.pageContentContainer}>
        <div className={styles.left}>
          <motion.div
            className={styles.contentContainer}
            key={activeCrew + "content"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
          >
            <h4 className={styles.role}>{activeCrewData?.role}</h4>
            <h3 className={styles.name}>{activeCrewData?.name}</h3>
            <p className={styles.bio}>{activeCrewData?.bio}</p>
          </motion.div>
          <nav className={styles.crewNav} aria-label="Crew navigation">
            <ul>
              {data.map((ele) => {
                return (
                  <li key={ele.name} className={styles.crewNavItem + " " + (ele.name == activeCrew ? styles.crewNavItemActive : "")}>
                    <button aria-label={ele.name} onClick={() => setActiveCrew(ele.name)} />
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        <div className={styles.right}>
          <motion.img
            key={activeCrew + "img"}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            src={activeCrewData?.image}
            alt={`${activeCrewData?.name}`} />
        </div>
      </div>
    </div>
  )
}

