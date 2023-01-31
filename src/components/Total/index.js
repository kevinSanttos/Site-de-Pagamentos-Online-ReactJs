import { useState } from "react"
import styles from './style.module.css'
export function Total({card}){
    

    
    
    
    const filtrados = card.map((item) =>{
        if (item.tipo == "Entrada"){
            return Number(item.valor)
        }
        else{
            return Number(item.valor) * -1
        }
        
    })
    
   
  
 
   const soma = filtrados.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
   
}, 0)
   
    
    return(
        <>

        <div className={styles.cardTotal}>
            <div className={styles.cardHeader}>
            <h3>Valor Total:  </h3>
             <p>R${soma}</p>
            </div>
            
            <p className={styles.descricaoCard}>O valor se refere ao saldo</p>
        </div>
        
        </>
    )
}