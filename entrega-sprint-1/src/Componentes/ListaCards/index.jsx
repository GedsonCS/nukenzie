import React from 'react'
import { Card } from './Card'
import styles from "./styles.module.css"

export const ListaCards = ({ listTransactions, removeCarddaLista }) => {
  return (
    <ul className={styles.Lista}><h3>Resumo Financeiro</h3> 
            {listTransactions.length > 0 ? (
                <>
                    {listTransactions.map((Transaction, index) => (
                        
                        <Card key={index} Transaction={Transaction} removeCarddaLista={removeCarddaLista} />   
                

            ))}

                </>
                ) : (
                <p className={styles.Aviso}>Você ainda não possui nenhum lançamento</p>
            )}

            
        </ul>
  )
}