import { useState } from "react"
import styles from './style.module.css'
export function Total({card}){

    const [total, setTotal] = useState()
    
    const filtrados = card.map((item) =>{
        if (item.tipo == "Entrada"){
            return item.valor
        }
        else{
            return item.valor * -1
        }
        
    })
    console.log(filtrados)
   

   function setarTotal(parametro){
    setTotal(parametro)
   }
   function somaFiltrados(filtrados){
     const soma = filtrados.reduce((valorAnterior, valorAtual) => {
        return valorAnterior + valorAtual
       
    }, 0)
    setTotal(soma)
   }
   
    
    return(
        <>

        <div className={styles.cardTotal}>
            <div className={styles.cardHeader}>
            <h3>Valor Total:</h3>
            <button className={styles.btnMostraTotal} onClick={ ()=> somaFiltrados(filtrados)}>Mostrar Total</button> <p>R${total}</p>
            </div>
            
            <p className={styles.descricaoCard}>O valor se refere ao saldo</p>
        </div>
        
        </>
    )
}