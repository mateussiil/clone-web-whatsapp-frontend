import React from 'react';

import '../Main.css';
import '../global.css';

import perfil from '../tmp/imagens/perfil.jpg';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function HeaderPerfil({ name, lastMessage  }){
    return(
        <div className="app-header">
            <div>
                <img src={perfil} alt="user"/>
                <div className="contato-info">
                    <p>{name}</p>
                    { name ? 
                        lastMessage ?                     
                            <span>{lastMessage}</span> 
                            : <span>Visto por ultimo</span>
                        : <></>
                    }
                </div>
            </div>
            { name ? 
                <div className="emoticon-div emoticion-div-header">
                    <SearchIcon  style={{ fontSize: 30, color: '#b3b3b3'}}/>
                    <AttachFileIcon className="attach-file-icon" style={{ fontSize: 30, color: '#b3b3b3' }}/>
                    <MoreVertIcon  style={{ fontSize: 30, color: '#b3b3b3' }}/>
                </div> 
                : <></>
            }

        </div>
    )
};