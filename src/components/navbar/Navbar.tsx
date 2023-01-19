
import { Barlow_Condensed } from '@next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

import styles from './Navbar.module.css'

const barlowCondensed = Barlow_Condensed({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

function addZero(i: number): string {
    if (i < 10) {
        return "0" + i;
    }
    return i + "";
}

function NavbarElement({ i, title, target, onClick }: { i: number, title: string, target: string, onClick: () => void }) {

    const router = useRouter();

    const isActive = router.pathname == target;

    return (
        <li className={styles.navbarEle + " " + (isActive ? styles.navbarEleActive : "")}>
            <Link onClick={onClick} href={target} className={barlowCondensed.className}>
                <div className={styles.linkContent}>
                    <span>{addZero(i)}</span>
                    <span>{title}</span>
                </div>
            </Link>
        </li>
    )
}

const data: { title: string, target: string }[] = [
    { title: "Home", target: "/" },
    { title: "Destination", target: "/destination" },
    { title: "Crew", target: "/crew" },
    { title: "Technology", target: "/technology" }
]

export default function Navbar() {

    // For mobile nav menu
    const [navShown, setNavShown] = useState(false);

    return (
        <header className={styles.navbarContainer + " " + (navShown ? styles.navbarContainerShown : "")}>
            <img src="/logo.svg" className={styles.logo} alt="website logo" />
            <span className={styles.line} />
            <nav aria-label="Primary navigation">
                <button onClick={() => setNavShown(!navShown)} className={styles.hamburgerBtn} aria-expanded={navShown} aria-label="Mobile navigation">
                    <img alt="" src={navShown ? "/icon-close.svg" : "/icon-hamburger.svg"} />
                </button>
                <ul>
                    {data.map((data, i) => <NavbarElement onClick={() => setNavShown(false)} key={i} i={i} title={data.title} target={data.target} />)}
                </ul>
            </nav>
        </header>
    );
}