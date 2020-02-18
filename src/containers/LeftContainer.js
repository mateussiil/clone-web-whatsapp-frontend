import React, { useState } from 'react';

import '../Main.css';
import '../global.css';

import perfil from '../tmp/imagens/perfil.jpg';
import HeaderPerfil from '../components/HeaderPerfil';
import SearchProfile from '../components/SearchProfile';
import BtnContact from '../components/BtnContact';


export default function LeftContainer({ contatoList , idContact }){

    function getChats(contato){
      idContact(contato);
    }

    return(
      <aside>
          <div className="left-container">
            <HeaderPerfil />
            <SearchProfile/>
            <div className="conversas">
              <ul>
                {contatoList.map(contato =>(
                  <div className="contato-item">
                    <li key={contato.id}>
                      <BtnContact contact={contato} handleClickCnt={getChats}/>
                    </li>
                  </div> 
                ))}
              </ul>
            </div>
          </div>
        </aside>
    )
}
