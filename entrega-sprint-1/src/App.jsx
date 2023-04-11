import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { Casa } from './pages/Home';
import { Pincipal } from './pages/Principal';


function App() {
  const [listTransactions, setListTransactions] = useState([])

  const adicionaCardNaLista = (card) => {
    const novoCard = {...card, id: uuidv4()}
    
    setListTransactions([ ...listTransactions, novoCard])

  }

  const removeCarddaLista = (cardid) => {

    const novaLista = listTransactions.filter(Transation => Transation.id !== cardid)
    setListTransactions(novaLista)

  }

  const somaTransactions = (listTransactions) =>{
    const positivo = listTransactions.filter(Transation => Transation.type === "Entrada")
    const negativo = listTransactions.filter(Transation => Transation.type === "Saida")

    const resultado = positivo.Value - negativo.Value
    return resultado

  }
  const [exibicao, setExibicao] = useState([])
  

  return (
    <>
         {exibicao === true ? (
     <>
         {
            
          <Pincipal listTransactions={listTransactions} adicionaCardNaLista={adicionaCardNaLista} removeCarddaLista={removeCarddaLista} somaTransactions={somaTransactions} setExibicao={setExibicao} />  
  
         }
  
     </>
     ) : (
         
        <Casa setExibicao={setExibicao} />
        
  )}
  
    </>
  )
}

export default App

