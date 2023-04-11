import React from 'react'
import styles from "./styles.module.css"

export const Saldo = ({ listTransactions }) => {
    const listaPositivo = listTransactions.filter(Transation => Transation.type === "Entrada")
    const listaNegativo = listTransactions.filter(Transation => Transation.type === "Saida")

    const arrayNumerosPositivos = listaPositivo.map(Valor => {
     return Valor.Value
    });

    const arrayNumerosNegativos = listaNegativo.map(Valor => {
      return Valor.Value
     });
    
     const totalPositivo = arrayNumerosPositivos.reduce((total, numero) => total+ numero, 0);
     const totalNegativo = arrayNumerosNegativos.reduce((total, numero) => total+ numero, 0);

     const saldo = totalPositivo - totalNegativo


  return (
   <>
    {listTransactions.length > 0 ? (
      <> 
              <div className={styles.Container_saldo}>
              <div className={styles.Div_Saldo}>
                <h3 className={styles.String_Valor} >Valor Total:</h3>
                <p className={styles.Saldo} >R$ {saldo}</p>
              </div>
              <p className={styles.Aviso}>O valor se refere ao Saldo</p>
            </div>
    
      </>
      ) : (
    <></>
    )}
   </>
  )
}


