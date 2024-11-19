import Link from "next/link";
import styles from "@/components/header/header.module.css"

export default function Header(){
    return(
        <nav className={styles.nav}>
            <div className={styles.div_gaia}>
                <Link href="/"><h1 className={styles.h1}>Gaia</h1></Link>
                

                <div>
                    <ul className={styles.menu}>
                        <li><Link href="/produto" className={styles.menu__links}>Produto</Link></li>
                        <li><Link href="/projetos" className={styles.menu__links}>Projetos</Link></li>
                        <li><Link href="/doacao" className={styles.menu__links}>Doações</Link></li>
                        <li><Link href="/criadores" className={styles.menu__links}>Criadores</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}