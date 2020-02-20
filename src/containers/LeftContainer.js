import React, { useState } from 'react';

import './LeftContainer.css';

import HeaderPerfil from '../components/HeaderPerfil';
import SearchProfile from '../components/SearchProfile';
import Conversas from '../components/Conversas';


export default function LeftContainer({ contatoList, idContact  }){
    const [contactSearch, setContactSearch ] = useState([]);
    const [contactSearchNone, setContactSearchNone ] = useState(false);
    const [empty, setEmpty ] = useState(false);

    function clickContact(data){
      //data tras os dados do elemento clicado
      idContact(data)
      //vai enviar pra App atraves da props
    }

    function verificationEmpty(data){
      //nao vazio e nao foi encontrado
      if(data && contactSearch){
        setEmpty(true);
      }
      //vazio
      if(!data){
        setEmpty(false);
      }
    }

    function getSearch(data){
      //data é uma lista com os elementos procurados
      //reponsavel por pegar o elemento procurado de geatSearch em SearchProfile
      setContactSearch(data);
      if(data.length === 0){
        setContactSearchNone(true);
      }
      //vai ser enviado pra Conversas e vai ser renderizado somente o que esta em data
    }

    return(
      <aside>
          <div className="left-container">
            <HeaderPerfil />
            <SearchProfile contacts={contatoList} getSearch={getSearch} empty1={verificationEmpty}/>
            <Conversas conversation={contactSearch} validation={empty} contacts={contatoList}  idContact={clickContact}/>
          </div>
        </aside>
    )
}
