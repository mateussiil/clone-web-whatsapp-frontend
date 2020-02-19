import React, { useState } from 'react';

import '../Main.css';
import '../global.css';

import HeaderPerfil from '../components/HeaderPerfil';
import SearchProfile from '../components/SearchProfile';
import BtnContact from '../components/BtnContact';


export default function LeftContainer({ contatoList , idContact }){
    const [contactSearch, setContactSearch ] = useState([]);

    function getChats(contato){
      //getChats recebe do elemento filho BtnContact o contato clicado
      idContact(contato);
      //idContact envia ao elemento pai-App o contato clicado e que vai ser rederizado
    }

    function getSearch(data){
      setContactSearch(data);
    }

    return(
      <aside>
          <div className="left-container">
            <HeaderPerfil />
            <SearchProfile contacts={contatoList} getSearch={getSearch}/>
            <div className="conversas">
              <ul>
                {
                  contactSearch.length !== 0 ? contactSearch.map(contato =>(
                    <div className="contato-item" key={contato.id}>
                      <BtnContact contact={contato} handleClickCnt={getChats}/>
                    </div> 
                  ))  : contatoList.map(contato =>(
                    <div className="contato-item" key={contato.id}>
                      <BtnContact contact={contato} handleClickCnt={getChats}/>
                    </div> 
                  )) 
              }
              </ul>
            </div>
          </div>
        </aside>
    )
}
