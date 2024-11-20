import { Card } from "@/components/cards/cards";
import styles from "@/app/projetos/page.module.css"
import mercado from "@/assets/mercado.jpeg"
import quitanda from "@/assets/quitanda.jpeg"
import padaria from "@/assets/padaria.jpg"

export default function Projetos(){
    return(
        <main className={styles.main}>
            <Card imagem={mercado} texto1="Mercado local" texto2="Local: Osasco" texto3="Mercado usa placa solares para diminuir o consumo de luz" Linkedin="Ticket Médio: R$50" Github="Clientes por dia: 100"/>

            <Card imagem={padaria} texto1="Padaria local" texto2="Local: Itapevi" texto3="Padaria utiliza os 'telhados verdes' para resfriamento" Linkedin="Ticket Médio: R$15" Github="Clientes por dia: 200"/>

            <Card imagem={quitanda} texto1="Quitanda local" texto2="Local: Carapicuíba" texto3="A quitanda utiliza biomassa para gerar energia térmica" Linkedin="Ticket Médio: R$20" Github="Clientes por dia: 50"/>
        </main>
    )
}