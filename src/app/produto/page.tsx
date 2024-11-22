import styles from "@/app/produto/page.module.css"

export default function Produto(){
    return(
        <main>
            <h1 className={styles.titulo}>Como nosso sistema funciona?</h1>
            <p className={styles.texto_produto}>Estamos propondo uma solução digital para o financiamento coletivo de projetos de energia renovável em comunidades de baixa renda. O sistema não só possibilita que você invista em uma causa nobre, como também oferece um retorno financeiro à medida que esses projetos geram economia de energia e proporcionam novas fontes de renda para as comunidades atendidas. Com um processo simples e acessível, todos podem participar e contribuir para um futuro mais sustentável e próspero.</p>

            <h1 className={styles.titulo}>Como posso doar?</h1>
            <p className={styles.texto_produto}>O processo será realizado por meio de um Pix com QR Code, o que permite que você faça sua contribuição de forma prática, sem necessidade de intermediários ou complicação. Basta escanear o QR Code com o aplicativo do seu banco e pronto! Seu apoio será direcionado diretamente para os projetos que vão transformar a realidade dessas comunidades.</p>

            <h1 className={styles.titulo}>Como funciona o sistema de retorno?</h1>
            <p className={styles.texto_produto}>Além de ajudar na melhoria das condições de vida de muitas pessoas, sua contribuição tem um retorno financeiro para você, o investidor. À medida que os projetos geram economia de energia e geram renda para as comunidades, você verá os resultados no retorno do seu investimento. Esses projetos não só impactam positivamente o ambiente, mas também criam um ciclo de benefícios, garantindo que todos os envolvidos tenham algo a ganhar. O retorno é baseado no impacto das soluções de energia renovável, que reduzem custos e aumentam a sustentabilidade das comunidades.</p>

            <h1 className={styles.titulo}>Como posso cadastrar meu projeto?</h1>
            <p className={styles.texto_produto}>Para cadastrar seu projeto de energia renovável, basta preencher o formulário de cadastro. Após o envio, nossa equipe realizará a análise do projeto e, se aprovado, começaremos a viabilizar o financiamento coletivo. O objetivo é gerar economia de energia e renda para as comunidades, oferecendo também um retorno financeiro para os investidores.</p>
        </main>
    )
}