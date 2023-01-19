import useWindowSize from "@/hooks/useWindowSize"
import { useRouter } from "next/router"
import styles from "./Background.module.css"

export default function Background({ children }: { children: any }) {

    const { width, height } = useWindowSize();

    const router = useRouter();

    let imgUrl = ""

    switch (router.pathname) {
        case "/":
            imgUrl = width <= 1010 ? "/background-home-tablet.webp" : "/background-home-desktop.webp";
            break;
        case "/destination":
            imgUrl = "/background-destination.webp";
            break;
        case "/crew":
            imgUrl = "/background-crew.webp";
            break;
        case "/technology":
            imgUrl = "/background-technology.webp";
            break;
        default:
            imgUrl = "/background-home-desktop.webp";
            break;
    }

    return (
        <div style={{ backgroundImage: `url(${imgUrl})` }} className={styles.background}>
            {children}
        </div>
    )
}
