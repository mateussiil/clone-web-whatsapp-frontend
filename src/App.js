import React, { useState } from 'react';

import './Main.css';
import './global.css';

import HeaderPerfil from './components/HeaderPerfil';
import SearchProfile from './components/SearchProfile';

import perfil from './tmp/imagens/perfil.jpg';
import LeftContainer from './containers/LeftContainer';
import RightContainer from './containers/RightContainer';
import None from './containers/None';

export default function App() {
    const [ chatView, setChatView ] = useState(false);

    const [ contact, setContact] = useState([]);
    const [ selectedChat, setSelectedChat ] = useState([]);
    const [ selectedChatRec, setSelectedChatRec] = useState([]);
    const [ selectedChatId, setSelectedChatId ] = useState(0);
    const [ selectedChatName, setSelectedChatName ] = useState();

    const contatoList = [
      {name:'Felipee', id:0, status:'Legal', msg:["ok","blz","tlgd"], msgReceive:["ok"]},
      {name:'Januario', id:1, status:'ok', msg:["Fodaseeeee", "tmj"], msgReceive:[]},
      {name:'Marcone', id:2, status:'ok' , msg:[], msgReceive:[]},
      {name:'Marcone', id:3, status:'ok' , msg:[], msgReceive:[]},
      {name:'Marcone', id:4, status:'ok' , msg:[], msgReceive:[]},
    ];


    function getIdContatos(contact){
      console.log(contact)
      setChatView(true);
      setContact(contact);
      setSelectedChat(contact.msg);
      setSelectedChatName(contact.name);
      setSelectedChatId(contact.id);
    }

    return (
      <div id="app">
        <LeftContainer contatoList={contatoList} idContact={getIdContatos}/>
        {chatView ? <RightContainer contact={ contact }/> : <None/>
        }
      </div>
    );
}

