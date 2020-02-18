import React from 'react';

import perfil from '../tmp/imagens/perfil.jpg';

export default function HeaderPerfil({ name, lastMsg }){
    return(
        <header className="App-header">
            <img src={perfil} alt="user"/>
            <div className="user-info">
                <strong>{name}</strong>
                <span>{name}</span>
            </div>
        </header>
    )
};