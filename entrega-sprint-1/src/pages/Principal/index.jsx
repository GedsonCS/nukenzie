import React from 'react'
import { ListaCards } from '../../Componentes/ListaCards'
import { useState } from 'react'
import styles from "./styles.module.css"
import { Form } from '../../Componentes/Form'
import { Cabecalho } from '../../Componentes/Cabecalho'
import { Saldo } from '../../Componentes/Saldo'


export const Pincipal = ({ listTransactions, adicionaCardNaLista, removeCarddaLista, somaTransactions, setExibicao }) => {
   
    return (
    <div className={styles.Body} >
        <Cabecalho setExibicao={setExibicao} />
        <div className={styles.Body_sem_Cabecalho}>
          <div>
              <Form adicionaCardNaLista={adicionaCardNaLista}/>
              <Saldo listTransactions={listTransactions}/>
          </div>
          <ListaCards listTransactions={listTransactions} removeCarddaLista={removeCarddaLista} somaTransactions={somaTransactions} />
        </div>
    </div>
  )
}
