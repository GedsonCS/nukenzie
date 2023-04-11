import styles from './styles.module.css'
import NuKenzie from '../../assets/NuKenzie.svg'

export function Cabecalho({ setExibicao }){
   return(
    <header className={styles.Header}>
        <img src={NuKenzie} alt="" />
        <button type='button' className={styles.Botao_Inicio} onClick={()=> setExibicao(false)} >Inicio</button>
    </header>
   )
}
