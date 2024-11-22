"use client"
import styles from "@/app/cadastro/page.module.css"
import { useState } from "react"
import { TipoProjeto } from "@/types/types"

export default function Cadastro(){

    const apiKey =  process.env.NEXT_PUBLIC_GAIA_KEY || "";

    const [projeto, setProjeto] = useState<TipoProjeto>({
        nome: "",
        descricaoProjeto: "",
        tipoEnergia: "",
        valorMeta: 0,
        valorArrecado: 0,
    })

    const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = evento.target
        setProjeto({...projeto, [name]:value })
    }

    const handleSubmit = async(evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        
        try{
            const response = await fetch(apiKey, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(projeto)
            })
            
            if (response.ok) {
                alert("Produto cadastrado!")
                setProjeto({
                    nome: "",
                    descricaoProjeto: "",
                    tipoEnergia: "",
                    valorMeta: "",
                    valorArrecado: "",
                })            
            }

        }catch(error){
            console.error("Falha no cadastro: ", error)
        }
    
    }

    return(
        <main>
            <h1 className={styles.titulo}>Cadastre seu projeto com a gente!</h1>
            <p className={styles.texto}>Para cadastrar basta preencher todos os campos, após o envio vamos fazer uma análise e enviaremos um retorno.</p>

            <div className={styles.ajuste_divs}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.div_labels}>
                        <label htmlFor="idNome" className={styles.label}>Nome do Projeto</label>
                        <input type="text" name="nome" id="idNome" value={projeto.nome} 
                        onChange={(evento) => handleChange(evento)} placeholder="Digite o nome do projeto" required className={styles.input}/>
                    </div>

                    <div className={styles.div_labels}>
                        <label htmlFor="idDesc" className={styles.label}>Descrição do projeto</label>
                        <input type="text" name="descricaoProjeto" id="idDesc" value={projeto.descricaoProjeto} 
                        onChange={(evento) => handleChange(evento)} placeholder="Faça uma breve descrição do projeto" required className={styles.input}/>
                    </div>

                    <div className={styles.div_labels}>
                        <label htmlFor="idTipo" className={styles.label}>Tipo de energia</label>
                        <input type="text" name="tipoEnergia" id="idTipo" value={projeto.tipoEnergia} 
                        onChange={(evento) => handleChange(evento)} placeholder="Diga qual energia sustentável seu projeto usa" required className={styles.input}/>
                    </div>

                    <div className={styles.div_labels}>
                        <label htmlFor="idMeta" className={styles.label}>Meta a ser batida (apenas números)</label>
                        <input type="text" name="valorMeta" id="idMeta" value={projeto.valorMeta} 
                        onChange={(evento) => handleChange(evento)} placeholder="Digite uma meta que seu projeto queira bater" required className={styles.input}/>
                    </div>

                    <div className={styles.div_labels}>
                        <label htmlFor="idArrecado" className={styles.label}>Meta a ser batida (apenas números)</label>
                        <input type="text" name="valorArrecado" id="idArrecado" value={projeto.valorArrecado} 
                        onChange={(evento) => handleChange(evento)} placeholder="Digite valor que sua empresa já arrecadou" required className={styles.input}/>
                    </div>

                    <div>
                        <button type="submit" className={styles.button}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </main>
    )
}