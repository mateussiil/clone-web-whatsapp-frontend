import React from 'react';

import perfil from '../tmp/imagens/perfil.jpg';

export default function HeaderPerfil({ name, lastMessage  }){
    return(
        <div className="app-header">
            <img src={perfil} alt="user"/>
            <div className="contato-info">
                <p>{name}</p>
                { name ? 
                    lastMessage ?                     
                    <span>{lastMessage}</span> 
                    : <span>Visto por ultimo</span>
                 : <></>}
            </div>
        </div>
    )
};