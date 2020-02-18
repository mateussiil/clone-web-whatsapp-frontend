import React, {useEffect, useState} from 'react';

import perfil from '../tmp/imagens/perfil.jpg';
import FormContainer from './FormContainer';
import Mensagens from '../components/Mensagens';

import HeaderPerfil from '../components/HeaderPerfil';
import '../Main.css';
import '../global.css';

export default function RightContainer({ contact }){
    return(
        <section>
            <div className="right-container">
                <HeaderPerfil name={contact.name} />
                <div className="mensagens" id="mensagens" >
                    <ul className="ul-msg">
                        <div className="receive">
                            {contact.msg.map(mensagemOther=>(
                                <Mensagens msg={mensagemOther}/>
                            ))} 
                        </div>
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
                <FormContainer contact={contact} />
            </div>
    </section>
    );
}