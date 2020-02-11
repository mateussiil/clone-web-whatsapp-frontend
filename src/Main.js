import React, {useEffect, useState} from 'react';

import api from './services/api';
import other from './utils/other';
import user from './utils/user';

import './Main.css';
import './global.css';

import perfil from './imagens/perfil.jpg';

export default function Main() {
  const [contatos, setContatos] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState([]);
 
  useEffect(() => {
    async function loadContatos(){
      const response = await api.get('/users');
      console.log(response.data);
      setContatos(response.data);
     }
    loadContatos();
  }, []);

  useEffect(()=>{
    async function loadMensagens(){
      // const response = await api.get(`/users/`)
      // setMensagens(response.data);
    }
    loadMensagens();
  }, []);

  function handleSubmit(e){
    e.preventDefault();
    if(mensagem){
      setMensagens([...mensagens, mensagem]);
      setMensagem("");  
    };
    
    const objDiv = document.getElementById("mensagens");
    objDiv.scrollTop = objDiv.scrollHeight;
    
    //solucao encontrada pra manter a scroll em baixo ou usando o flex-direction:collum-reverse mas nao achei legal
  }

  function handleChange(e){
    setMensagem(e.target.value);
  }


  return (
    <div id="app">
      <aside>
        <div className="aside-container">
          <header className="header-personal">
            <img src={perfil} alt="perfil"/>
          </header>
          <div className="input-block">
            <label>
              <input title="procurar uma nova conversa" />
            </label>
          </div>
          <div className="conversas">
            <ul >
              {contatos.map(contato =>(
                <div className="contato-item">
                  <li key={contato._id}>
                    <header>
                      <img src={perfil} alt={contato._id}/>
                      <div className="user-info">
                        <strong>{contato.name}</strong>
                        <span>{contato.status}</span>
                      </div>
                    </header>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <section>
        <div className="mensagem-container">
          <header>
            <img src={perfil} alt="user"/>
            <div className="user-info">
              <strong>Perfil</strong>
              <span>qualqeur coisa</span>
            </div>
          </header>
          <div className="mensagens" id="mensagens" >
            <ul className="ul-msg">
            <div className="receive">
                {other.map(mensagemOther=>(
                  <div className="mensagem-other" >
                  <li key="" ><span >{mensagemOther.conteudo}</span></li>
                  <span className="hora-mensagem-other">12:50</span>
                </div>
                ))}
              </div>
              <div className="send">
                {mensagens.map(mensagem =>(
                  <div className="mensagem" >
                    <li key="" ><span >{mensagem}</span></li>
                    <span className="hora-mensagem">12:50</span>
                  </div>
                ))}
              </div>
              
            </ul>
          </div>
          <footer className="form-container">
              <form className="mensagem-send" onSubmit={handleSubmit}>
                <input
                  className="Todo-input"
                  value={mensagem}
                  onChange={handleChange}
                  placeholder="Digite uma nova mensagem"
                />
                <button type="submit" >
                  Adicionar
                </button>
              </form>
          </footer>
        </div>
      </section>
    </div>
    
  );
}