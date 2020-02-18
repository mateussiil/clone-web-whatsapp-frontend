import React from 'react';

export default function Mensagens({ msg }){
    return(
        <div className="mensagem-other" >
            <li><span>{msg}</span></li>
            <span className="hora-mensagem-other">12:50</span>
        </div>
    )
};