import React, { useState } from 'react';

import './Main.css';
import './global.css';

import LeftContainer from './containers/LeftContainer';
import RightContainer from './containers/RightContainer';
import None from './containers/None';

export default function App() {
    const [ chatView, setChatView ] = useState(false);
    const [ contact, setContact] = useState([]);
    const [newCnts, setNewCnts] = useState([]);

    const contatoList = [
      {name:'Felipee', id:0, status:'Legal', msg :{send:["ok","talvez"], receive:["ok","blz","tlgd"]}} ,
      {name:'Januario', id:1, status:'ok',  msg :{send:["ok","talvez"], receive:["ok","blz","tlgd"]}},
      {name:'Marcone', id:2, status:'ok' ,  msg :{send:["ok","talvez"], receive:["ok","blz","tlgd"]}},
      {name:'Marcone', id:3, status:'ok' ,  msg :{send:["ok","talvez"], receive:["ok","blz","tlgd"]}},
      {name:'Marcone', id:4, status:'ok' ,  msg :{send:["ok","talvez"], receive:["ok","blz","tlgd"]}},
    ];

    function getIdContatos(contact){
      setChatView(true);
      setContact(contact);
    }

    function getMessage(msg, id){
      for(let i=0;i<contatoList.length;i++){
        if(id===contatoList[i].id){
          contatoList[i].msg.send.push(msg);
          setNewCnts(contatoList[i].msg.send);
        }
      }
    }
   
    return (
      <div id="app">
        <LeftContainer contatoList={contatoList} idContact={getIdContatos} />
        {
          chatView ? <RightContainer contact={ contact } newMessage={getMessage} newMsg={newCnts}/> : <None/>
        }
      </div>
    );
}

