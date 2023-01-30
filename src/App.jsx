import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Form } from './components/Form';
import { RenderizaCard } from './components/RenderizaCard';
import { Total } from './components/Total';



function App() {
  const [page, setPage] = useState('LandingPage')
  const [card, setCard] = useState([])
  return (
    
      <main className="App-header">
    {
      page == 'LandingPage' ? (
        <section className='secaoInicial'>
          <img src="NuKenzie.png" alt="" />
          <h3><span>Nu</span>Kenzie</h3>
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button onClick={() => setPage('Home')}>Iniciar</button>
         
        </section>
      )
      :
      (
        <body className='body'>
          <header>
                <h3><span>Nu</span>Kenzie</h3>
                <button onClick={() => setPage('LandingPage')}>Inicio</button>
            </header>
         
         <section className='secaoMaior'>
              <Form setCard={setCard} setPage={setPage}></Form>
              
              <section>
              <h2>Resumo financeiro</h2>
              {
                card.map((item) => 
                (
                  
                  <RenderizaCard  key={item.id} descricao={item.descricao} valor={item.valor} tipo = {item.tipo} > </RenderizaCard>
                ))
              }
              </section>
              
        
         </section>

         <Total card={card}></Total>
         
        </body>
        
        
      
      )
    }

       
      </main>
  
  );
}

export default App;
