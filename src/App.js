import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/cadastro')
    .then((response) => {
      setPosts(response.data)
      
    })
    .catch(() => {
      console.log('deu ERRADO')
    })
  }, [])


	return(
		<div className="app">
      <p><strong>Cadastros</strong></p>
    
			<div className="cards">

        {posts.map((post, key) => {

          return(
            
            <div className="card" key={key}>
              <div className="card-body" >
                  <p>Nome: {post.nome}</p>
                  <p>Email: {post.email}</p>
                  <p>Telefone: {post.telefone}</p>
                  <p>Pontos: x</p>
              </div>

            </div>
          )
        })}
       

			</div>
      
      <a href='/cadastrar'>
        <button className='btn-tabela' type='submit'>Cadastrar</button>
      </a>

      <a href='/tabela'>
        <button className='btn-tabela' type='submit'>Ver ranking</button>
      </a>

		</div>
	)
}

export default App;

