import React from 'react'
import styles from './styles.module.css'
import trash from '../../../assets/trash.svg'

export const Card = ({ Transaction, removeCarddaLista }) => {
  return (
   <>
        {Transaction.type === "Entrada" ? (
    <>
        {<li className={styles.card_Entrada} >
            <div className={styles.Midia}>
                <h3 className={styles.Titulo_Card} >{Transaction.Description}</h3>
                <p className={styles.tipo}>{Transaction.type}</p>
            </div>
            <div className={styles.Midia_Valor} >
                <p className={styles.Valor_Card} >R$ {Transaction.Value}</p>
                <img onClick={() => removeCarddaLista(Transaction.id)} className={styles.Lixeira} src={trash} alt="" />
            </div>
            
        </li>}

    </>
    ) : (
        <li className={styles.card_Saida} >
            <div className={styles.Midia} >
                <h3 className={styles.Titulo_Card} >{Transaction.Description}</h3>
                <p className={styles.tipo}>{Transaction.type}</p>
            </div>
            <div className={styles.Midia_Valor} >
                <p className={styles.Valor_Card} >R$ -{Transaction.Value}</p>
                <img onClick={() => removeCarddaLista(Transaction.id)} className={styles.Lixeira} src={trash} alt="" />
            </div>
            
        </li>
)}

   </>
  )
}


