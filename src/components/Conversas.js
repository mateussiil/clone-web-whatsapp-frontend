import React from 'react';

import BtnContact from '../components/BtnContact';

export default function Conversas({ contacts, conversation , idContact, validation}){
    
    function getChats(contato){
        //getChats recebe do elemento filho BtnContact o contato clicado
        idContact(contato);
        //idContact envia ao elemento pai-LeftContainer o contato clicado e que vai ser rederizado
    }

    return(
        <div className="conversas">
            <ul>
            {
                conversation.length !== 0 ? conversation.map(contato =>(
                    <div className="contato-item" key={contato.id}>
                        <BtnContact contact={contato} handleClickCnt={getChats}/>
                    </div> 
                ))  : validation ? <div className="none-search">Nenhuma conversa, contato ou mensagem foram encontrada</div> 
                    : contacts.map(contato =>(
                    <div className="contato-item" key={contato.id}>
                        <BtnContact contact={contato} handleClickCnt={getChats}/>
                    </div> 
                )) 
            }
            </ul>
        </div>
    )
};