import React from 'react'
import api from '../../Api/api';
import './cadastrar.css';
import { Link } from 'react-router-dom';

const Cadastrar = (props) => {
  const handleSubmit = async (evento) => {
    evento.preventDefault();
// 
    const nome = evento.target.nome.value;
    const email = evento.target.email.value;
    const telefone = evento.target.telefone.value;

    const Cad = {
        nome: nome,
        email: email,
        telefone: telefone,
    }

    try {
      const response = await api.fetchPost(Cad);
      const data = await response;
      console.log(data);
      props.history.push("/");
    } catch (error) {
      console.log(error);
    }    
  };
  
  return (
    
    <section className="add">
      <p><strong>Cadastrar</strong></p>

      <form className="add-form" onSubmit={handleSubmit}>

        <div>
          <label>Nome: </label>
          <input type="text" id="nome" name="nome" placeholder="Digite o seu nome" className="add-form-group-input"/>
        </div>

        <div>
          <label>Email: </label>
          <input type="text" id="email" name="email" placeholder="Digite o seu email" className="add-form-group-input"/>
        </div>

        <div>
          <label>Telefone: </label>
          <input type="text" id="telefone" name="telefone" placeholder="Digite o seu telefone" className="add-form-group-input"/>

        </div>

        <div>
          < Link to="/indica" >
          <button type="submit" className="btn-enviar">Enviar</button>
          </ Link>
        </div>
        
      </form>
    </section>
  )
}

export default Cadastrar

