import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import logo from "../public/bbc-logo.svg"
import styles from "./Navigation.module.css"

export default function Navigation({ items }) {
    const router = useRouter()
    const isActive = (href) => {
        return href === router.asPath ? styles.active : ""
    }
    return (
        <nav className={styles.navigation}>
            <Link href="/">
                <a><Image src={logo} alt="logo" /></a>
            </Link>

            <ul>
                {
                    items.map(item => {
                        return (
                            <li key={item.href}>
                                <Link href={item.href} passHref>
                                    <a className={isActive(item.href)}>
                                        {item.label}
                                    </a>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}