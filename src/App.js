import React, { useState } from 'react';

import './Main.css';
import './global.css';

import LeftContainer from './containers/LeftContainer';
import RightContainer from './containers/RightContainer';
import None from './containers/None';

export default function App() {
    const [ chatView, setChatView ] = useState(false);
    const [ contact, setContact] = useState([]);

    const contatoList = [
      {name:'Felipee', id:0, status:'Legal', msg:["ok","blz","tlgd"], msgReceive:["ok"]},
      {name:'Januario', id:1, status:'ok', msg:["Fodaseeeee", "tmj"], msgReceive:[]},
      {name:'Marcone', id:2, status:'ok' , msg:["Desde que mudou", "tmj"], msgReceive:[]},
      {name:'Marcone', id:3, status:'ok' , msg:[], msgReceive:[]},
      {name:'Marcone', id:4, status:'ok' , msg:[], msgReceive:[]},
      {name:'Marcone', id:5, status:'ok' , msg:[], msgReceive:[]},
      {name:'Marcone', id:6, status:'ok' , msg:[], msgReceive:[]},
      {name:'Marcone', id:7, status:'ok' , msg:[], msgReceive:[]},
      {name:'Marcone', id:8, status:'ok' , msg:[], msgReceive:[]},
      {name:'Marcone', id:9, status:'ok' , msg:[], msgReceive:[]},
      {name:'Marcone', id:10, status:'ok' , msg:[], msgReceive:[]},
      {name:'Marcone', id:11, status:'ok' , msg:[], msgReceive:[]},
      {name:'Marcone', id:12, status:'ok' , msg:[], msgReceive:[]},
    ];


    function getIdContatos(contact){
      setChatView(true);
      setContact(contact);
    }

    return (
      <div id="app">
        <LeftContainer contatoList={contatoList} idContact={getIdContatos}/>
        {
          chatView ? <RightContainer contact={ contact }/> : <None/>
        }
      </div>
    );
}

