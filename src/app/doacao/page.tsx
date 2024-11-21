import styles from "@/app/doacao/page.module.css"
import Image from "next/image"
import QR_Code from "@/assets/QR_Code.png"

export default function Doacao(){
    return(
        <main className={styles.main}>
            <div className={styles.div_doe}>
                <h1 className={styles.h1}>Doe qualquer quantia!</h1>
                <Image src={QR_Code} alt={"QR CODE pix"} className={styles.img_qr_code}/>
                <p className={styles.texto_detalhes}>Detalhes da transação</p>
                <p className={styles.texto_detalhes}>Destinatário</p>
                <p className={styles.texto_detalhes_info}>OpenPix Gaia</p>
                <p className={styles.texto_detalhes}>Identificador</p>
                <p className={styles.texto_detalhes_info}>b575d0f892844140970ee31f65</p>
            </div>
        </main>
    )
}