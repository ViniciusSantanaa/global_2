import styles from "@/app/page.module.css"
import Image from "next/image"
import Gaia from "@/assets/imagem_gaia.jpg"
import Logo_gaia from "@/assets/gaia_logo.png"

export default function Home() {
  return (
      <>
      <main>

        <section className={styles.apresentacao}>
          <Image src={Logo_gaia} alt={"Logo gaia"} className={styles.logo_gaia}/>
          <div className={styles.apresentacao__textos}>
            <h1 className={styles.slogan}>Transformando energia limpa em um futuro sustentável para o planeta e para você.</h1>
            <p className={styles.texto}>Descubra como fazer parte da mudança para um futuro sustentável! Nossa plataforma conecta você a projetos de energia renovável em comunidades de baixa renda, permitindo que você invista em soluções que transformam vidas. Ao apoiar a instalação de tecnologias limpas, como painéis solares e turbinas eólicas, você não só promove o acesso à energia sustentável, mas também recebe retornos financeiros baseados na economia gerada e na renda obtida por essas comunidades.
            Invista com propósito, impulsione a energia limpa e colabore para um impacto social positivo!</p>
          </div>
        </section>

        <section className={styles.section_texto_sustentavel}>
          <h2 className={styles.texto_sustentavel_titulo}>A importância de usarmos a energia sustentavel!</h2>
          <p className={styles.texto_sustentavel_texto}>A energia sustentável é fundamental para o nosso futuro. Ao apostar em fontes renováveis como solar, eólica e hidrelétrica, podemos reduzir a emissão de gases poluentes e combater as mudanças climáticas. Essas fontes são inesgotáveis e não prejudicam o meio ambiente, ao contrário dos combustíveis fósseis, que são limitados e responsáveis por grande parte da poluição. Além disso, ao investir em energias limpas, estamos criando um futuro mais seguro, com mais empregos e inovação, ao mesmo tempo que garantimos maior independência energética.<br />Além dos benefícios para o planeta, a energia sustentável melhora nossa qualidade de vida. Menos poluição significa menos doenças respiratórias e cardiovasculares, e mais saúde para todos. Ao adotar energias renováveis, podemos transformar nossa economia, gerar crescimento e oferecer um futuro mais justo e próspero para as próximas gerações. Investir em energia limpa não é apenas uma escolha inteligente, é um passo essencial para um mundo mais saudável e sustentável.</p>
        </section>

        <section className={styles.ajustes_section_gaia}>
          <div className={styles.section_gaia}>       
            <h1 className={styles.h1_gaia}>O que Gaia representa e porque esse nome?</h1>
            <p className={styles.texto_gaia}>Gaia, na mitologia grega, é a deusa primordial da Terra, simbolizando a essência da natureza e a fonte de toda vida. Personificação do próprio planeta, Gaia surgiu do caos para dar origem ao céu , às montanhas, aos mares e a todas as formas de vida. Ela representa a energia vital que sustenta o equilíbrio do ecossistema, trazendo fertilidade, abundância e harmonia. Como protetora da natureza, Gaia nos lembra da importância de cuidar do planeta e manter a conexão entre todos os seres vivos. Sua história inspira o respeito pela Terra e a busca por um futuro mais sustentável e equilibrado.</p>
          </div>
          <div className={styles.section_imagem_gaia}>
            <Image src={Gaia} alt={"Imagem da Deusa Gaia"} className={styles.imagem_gaia}/>
          </div>
        </section>
      </main>
      </>
  )
}
