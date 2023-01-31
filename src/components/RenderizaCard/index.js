import styles from './style.module.css'
import imgLixo from '../../assets/trash.png'
export function RenderizaCard({card, descricao, valor, tipo, keyCard, setCard}){
    function deleta(keyCard){
        const listaFiltradaSemDelete = card.filter((item)=> {
            return item.id !== keyCard
            
        })
        setCard(listaFiltradaSemDelete)
       
    }
    return(
        tipo == "Entrada" ? (
            <>
                

            <div className={styles.cardEntrada} >
                
                <div className={styles.conteudoCard}>
                    <h3>Descrição: {descricao}</h3>
                    <span>R$ {valor},00</span> <br></br>
                    <button  onClick={() => deleta(keyCard)} ><img src={imgLixo}/></button>
                </div>
                <p>Entrada</p>
                
            </div>
            
            </>
        ) : (
            <>
                

            <div className={styles.card} >
                
                <div className={styles.conteudoCard}>
                    <h3>Descrição: {descricao}</h3>
                    <span>R$ {valor},00</span> <br></br>
                    <button  onClick={() => deleta(keyCard)} ><img src={imgLixo}/></button>
                </div>
                <p>Despesa</p>
                
            </div>
            
            </>

        )

           
            
        
            
        
       
    )
}