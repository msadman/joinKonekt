import Link from "next/link"
import classes from "./MainHeader.module.css"

export default function MainHeader() {
  return (
    <header>
      <nav className={classes.nav}>
        <p>JoinKonekt</p>
        <ul className={classes.ul}>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}