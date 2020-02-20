import React from 'react';

import Mensagens from './Mensagens';

export default function ListMessage({ contact }){
    return(
        <div className="mensagens" id="mensagens" >
            <ul className="ul-msg">
                    {contact.msg.map(mensagemOther=>(
                        <div className="receive" >
                            <Mensagens msg={mensagemOther}/>
                        </div>
                    ))} 
                <div className="send">
                    {contact.msgReceive.map(mensagem =>(
                        <div className="mensagem" >
                            <li><span >{mensagem}</span></li>
                            <span className="hora-mensagem">12:50</span>
                        </div>
                    ))}
                </div>
            </ul>
        </div>
    )
};