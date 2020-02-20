import React from 'react';


import FormContainer from '../components/FormContainer';
import ListMessage from '../components/ListMessage';

import HeaderPerfil from '../components/HeaderPerfil';

import './RightContainer.css';


export default function RightContainer({ contact, newMessage, newMsg }){
    function getMessage(msg, id){
        newMessage(msg, id);
    };

    return(
        <section>
            <div className="right-container">
                <HeaderPerfil name={contact.name} />
                <ListMessage contact={contact} newMsg={newMsg} />
                <FormContainer contact={contact} newMessage={getMessage}/>
            </div>
    </section>
    );
}