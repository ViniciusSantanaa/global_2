import styles from "@/app/page.module.css"
import Image from "next/image"
import Gaia from "@/assets/imagem_gaia.jpg"

export default function Home() {
  return (
      <>
      <main className={styles.main}>
        <div className={styles.div_gaia}>       
          <h1 className={styles.h1_gaia}>O Que Gaia Representa?</h1>
          <p className={styles.texto_gaia}>Gaia, na mitologia grega, é a deusa primordial da Terra, simbolizando a essência da natureza e a fonte de toda vida. Personificação do próprio planeta, Gaia surgiu do caos para dar origem ao céu , às montanhas, aos mares e a todas as formas de vida. Ela representa a energia vital que sustenta o equilíbrio do ecossistema, trazendo fertilidade, abundância e harmonia. Como protetora da natureza, Gaia nos lembra da importância de cuidar do planeta e manter a conexão entre todos os seres vivos. Sua história inspira o respeito pela Terra e a busca por um futuro mais sustentável e equilibrado.</p>
        </div>
        <div className={styles.div_imagem_gaia}>
          <Image src={Gaia} alt={"Imagem da Deusa Gaia"} className={styles.imagem_gaia}/>
        </div>
      </main>
      </>
  )
}
