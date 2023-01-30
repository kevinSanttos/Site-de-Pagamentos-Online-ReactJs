import { useState } from "react"
import {v4 as uuid} from 'uuid'
import styles from './style.module.css'

export function Form({setCard, setPage}){
    const [descricao, setDescricao] = useState('')
    const [valor, setValor] = useState('')
    const [tipo, setTipo] = useState('')
    function handleValor(event){
        event.preventDefault()
        const newCard = {id: uuid(), descricao, valor, tipo}
        setCard((oldCard) => [...oldCard, newCard])
        
    }
    return (
        <body className={styles.body}>
           
            <form onSubmit={handleValor} className={styles.form}>
                <label htmlFor="descricao">Descrição</label>
                <input placeholder="Digite uma descrição..." type="text" id="descricao" onChange={(event) => setDescricao(event.target.value)}/>
                <span>Exemplo: Compra de roupas</span>
                <label htmlFor="valor">Valor</label>
                <input placeholder="Digite o valor..." type="number" id="valor" onChange={(event) => setValor(event.target.value)} />
                <label htmlFor="tipo">Tipo do Valor</label>
                <select id="tipo" onChange={(event) => setTipo(event.target.value)}>
                    <option>Selecione um tipo</option>
                    <option>Entrada</option>
                    <option>Saída</option>
                </select>
                <button type="submit">Inserir Valor</button>
            </form>
            
        </body>
    
    )
    
}