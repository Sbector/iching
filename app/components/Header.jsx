import styles from './Header.module.css'
import Link from "next/link"

const links = [{
  label: 'home',
  route: '/'
},{
  label: 'about',
  route: '/about'
},{
  label: 'instructions',
  route: '/instructions'
},{
  label: 'consult',
  route: '/consult'
}]

export default function Header () {
    return(
        <header className={styles.header}>
          <nav>
            <ul className={styles.navigation}>
              {links.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    )
}