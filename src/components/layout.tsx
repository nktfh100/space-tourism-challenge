import Background from "./background/Background"
import Navbar from "./navbar/Navbar"

export default function Layout({ children }: any) {
    return (
        <Background>
            <Navbar />
            <main>
                {children}
            </main>
        </Background>
    )
}