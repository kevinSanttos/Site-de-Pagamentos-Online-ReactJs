
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { RenderizaCard } from './components/RenderizaCard';
import { Total } from './components/Total';
import img from './assets/Illustration.png'
import img2 from './assets/NuKenzie.png'
import img3 from './assets/Nu Kenzie.png'


function App() {
  const [page, setPage] = useState('LandingPage')
  const [card, setCard] = useState([])
 
  return (
    
      <main className="App-header">
    {
      page == 'LandingPage' ? (
        <section className='conteudo'>
        <section className='secaoInicial'>
        
         <img src={img2} alt="" />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button onClick={() => setPage('Home')}>Iniciar</button>
         
         
        </section>
        <section>
           <img className='img' src={img} alt="" />
        </section>
        </section>
        
      )
      :
      (
        
        <main className='main'>
          <header>
                <img className='imgFormPage' src={img3} alt="" />
                <button onClick={() => setPage('LandingPage')}>Inicio</button>
                
            </header>
         
         <section className='secaoMaior'>
              <Form setCard={setCard} setPage={setPage}></Form>
              
              <section className='cardsSection'>
                <div className='cards'>
                <h2>Resumo financeiro</h2>

                  {card.map((item) => (
                        
                        <RenderizaCard  keyCard={item.id} card={card} setCard={setCard} descricao={item.descricao} valor={item.valor} tipo = {item.tipo} > </RenderizaCard>
                      
                    ))
                  }

                </div>    
          </section>
         </section>
         <Total card={card}></Total>
        </main>
        
        
      
      )
    }

       
      </main>
  
  );
}

export default App;
