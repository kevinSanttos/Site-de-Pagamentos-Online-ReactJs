import styles from './style.module.css'
export function RenderizaCard({descricao, valor, tipo}){
    return(
        
             <div className={styles.card} >
                <div className={styles.conteudoCard}>
                    <h3>Descrição: {descricao}</h3>
                    <span>R$ {valor},00</span> <br></br>
                    <button></button>
                </div>
                {tipo == "Entrada" ? (<p>{tipo}</p>) : (<p>Despesa</p>)} 
                
            </div>
        
       
    )
}