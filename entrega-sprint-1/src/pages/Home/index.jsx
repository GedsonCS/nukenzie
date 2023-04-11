import React from 'react'
import styles from "./styles.module.css"
import NuKenzie2 from '../../assets/NuKenzie2.svg'
import Illustration from '../../assets/Illustration.svg'

export const Casa = ({ setExibicao }) => {
  return (
    <main className={styles.Container_Home}>
        <section className={styles.Descricao_Home}>
            <img className={styles.Nu_kenzie} src={NuKenzie2} alt="" />
            <h1 className={styles.Titulo}>Centralize o controle das suas finanças</h1>
            <p className={styles.Descricao_Titulo}>de forma rápida e segura</p>
            <button className={styles.Encaminhar} type='button' onClick={()=> setExibicao(true)}>Iniciar</button>
        </section>
        <img className={styles.Illustration} src={Illustration} alt="" />
    </main>
  )
}

