import React from 'react';

import Mensagens from './Mensagens';

export default function ListMessage({ contact, newMsg }){
    console.log(newMsg)
    return(
        <div className="mensagens" id="mensagens" >
            <ul className="ul-msg">
                {contact.msg.receive.map(mensagemOther=>(
                    <div className="receive" >
                        <Mensagens msg={mensagemOther}/>
                    </div>
                ))} 
                {newMsg===[] ? contact.msg.send.map(mensagem =>(
                    <div className="send">
                        <div className="mensagem" >
                            <li><span >{mensagem}</span></li>
                            <span className="hora-mensagem">12:50</span>
                        </div>
                    </div>
                ))
                : newMsg.map(mensagem =>(
                    <div className="send">
                        <div className="mensagem" >
                            <li><span >{mensagem}</span></li>
                            <span className="hora-mensagem">12:50</span>
                        </div>
                    </div >
                ))
            }
            </ul>
        </div>
    )
};