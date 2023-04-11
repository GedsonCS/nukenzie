import styles from "./styles.module.css"
import { useState } from "react"

export function Form({ adicionaCardNaLista }){
    const [formData, setFormData] = useState ({
        Description: "",
        Value: 0,
        type: "Entrada"
    })

    const submeter = (event) => {
        event.preventDefault()

        if(formData.Description !== "" && formData.Value !== ""){
            adicionaCardNaLista(formData)
        }
        else{
            alert(`Preencha todos os campos`)
        }
    }

    /*setFormData({
        Description: "",
        Value: 0,
        type: "Entrada"
    })*/

    return(
        <form onSubmit={submeter} noValidate>

            <fieldset className={styles.Div_Descricao}>
                <label className={styles.Descricao} htmlFor="">Descrição</label>
                <input value={formData.Description} className={styles.input_Descricao} placeholder="Digite sua Descrição" type="text" onChange={(event) => setFormData({ ...formData, Description: event.target.value})} />
                <span className={styles.span_Descricao}>Ex: Compra de roupas</span>
            </fieldset>
                <div className={styles.container_valor}>
                        <fieldset className={styles.Div_Valor}>
                            <label className={styles.label_valor} htmlFor="Valor">Valor</label>
                            <input value={formData.Value} className={styles.Valor} id="Valor" placeholder="Digite o valor" type="text" onChange={(event) => setFormData({ ...formData, Value: Number(event.target.value)})} />
                        </fieldset>
                    <div>
                        <p className={styles.Descricao_tipo_valor}>Tipo de valor</p>
                        <select value={formData.type} className={styles.tipo_valor} name="" id="" onChange={(event) => setFormData({ ...formData, type: event.target.value})}>
                            <option className={styles.options} value="Entrada">Entrada</option>
                            <option  className={styles.options} value="Saida">Saída</option>
                        </select>
                    </div>
                </div>
            <div>
                <button className={styles.Botao_Inserir_Valor} type="submit">Inserir Valor</button>
            </div>
        </form>
    )
}