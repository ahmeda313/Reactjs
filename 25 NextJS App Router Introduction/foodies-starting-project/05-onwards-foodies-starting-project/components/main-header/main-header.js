import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/logo.png"
import classes from "./main-header.module.css"
import MainHeaderBackground from "./main-header-background"
import NavLink from "../nav/nav-link"

export default function MainHeader(){
    return <>
    <MainHeaderBackground/>
    <header className={classes.header}> 
        <Link href="/" className={classes.logo}>
        <Image src={logo} alt="logo"/>
        NextLevel food
        </Link>

        <nav className={classes.nav}>
            <ul>
                <li>
                <NavLink href="/meals">Browse meals</NavLink>
                
                </li>
                <li>
                <NavLink href="/community">Join the community</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
}