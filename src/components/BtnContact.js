import React from 'react';

import perfil from '../tmp/imagens/perfil.jpg';

export default function BtnContact({contact , handleClickCnt}){
    const contato = contact;

    function handleClick(e){
        handleClickCnt(contato);
    }

    return(
        <button onClick={handleClick}>
            <header>
                <img src={perfil} alt={contato.id}/>
                <div className="user-info">
                    <strong>{contato.name}</strong>
                    <span>{contato.lastMsg}</span>
                </div>
            </header>
        </button>
    );
};