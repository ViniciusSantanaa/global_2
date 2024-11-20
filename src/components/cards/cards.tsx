import styles from "@/components/cards/cards.module.css"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"


interface LayoutCard {
    texto1?: string
    texto2?: string
    texto3?: string
    Linkedin?: string
    Github?: string
    href_Linkedin?: string
    href_Github?: string
    imagem: StaticImageData
}

export const Card: React.FC<LayoutCard> = ({ texto1, texto2, texto3, Linkedin, Github, href_Linkedin, href_Github, imagem }) => {
    return (
        <div className={styles.fundo_card}>
            <Image src={imagem} alt={"Imagem"} width={200} height={200} className={styles.imagem} />
            <p className={styles.descricao}>{texto1}</p>
            <p className={styles.descricao}>{texto2}</p>
            <p className={styles.descricao}>{texto3}</p>
            <Link className={styles.descricao} href={href_Linkedin ?? ""}>{Linkedin}</Link>
            <Link className={styles.descricao} href={href_Github ?? ""}>{Github}</Link>
        </div>
    );
};