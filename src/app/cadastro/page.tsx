import styles from "@/app/cadastro/page.module.css"

export default function Cadastro(){
    return(
        <main>
            <h1 className={styles.titulo}>Cadastre seu comércio com a gente!</h1>
            <p className={styles.texto}>Para cadastrar basta preencher todos os campos, após o envio vamos fazer uma análise e enviaremos um retorno.</p>
        </main>
    )
}