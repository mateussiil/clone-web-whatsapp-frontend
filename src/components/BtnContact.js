import React from 'react';

import perfil from '../tmp/imagens/perfil.jpg';

export default function BtnContact({contact , handleClickCnt}){
    //contact é o elemento que este componente recebe do pai-LeftContainer
    //handleClinkCnt é responsavel por enviar ao pai o contato clicado

    const contato = contact;  

    function handleClick(e){
        handleClickCnt(contato);
    }

    return(
        <button className="btnContato" onClick={handleClick}>
            <div>
                <img src={perfil} alt={contato.id}/>
                <div className="user-info">
                    <strong>{contato.name}</strong>
                    <span>{contato.lastMsg}</span>
                </div>
            </div>
        </button>
    );
};