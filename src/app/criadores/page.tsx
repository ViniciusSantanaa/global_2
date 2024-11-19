import styles from "@/app/criadores/page.module.css"
import { Card } from "@/components/cards/cards";
import Felipe from "@/assets/imagem.felipafa.jpg"
import Vinicius from "@/assets/imagem.vinicius.jpg"
import Pedro from "@/assets/imagem.gemeo.jpg"

export default function Criadores(){
    return(
        <main className={styles.main}>
            <Card imagem={Felipe} texto1="Felipe Rosa Peres" texto2="RM 000000" texto3="1TDSPX" Linkedin="Linkedin" Github="Github" href_Linkedin="" href_Github=""/>

            <Card imagem={Vinicius} texto1="Vinícius De Souza Sant Anna" texto2="RM 556841" texto3="1TDSPX" Linkedin="Linkedin" Github="Github" href_Linkedin="https://www.linkedin.com/in/vin%C3%ADcius-souza-sant-anna-0963ba2aa/" href_Github="https://github.com/ViniciusSantanaa"/>

            <Card imagem={Pedro} texto1="Pedro Henrique De Souza" texto2="RM 555533" texto3="1TDSPX" Linkedin="Linkedin" Github="Github" href_Linkedin="" href_Github=""/>            
        </main>
    )
}