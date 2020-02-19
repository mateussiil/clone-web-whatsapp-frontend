import React from 'react';


import FormContainer from '../components/FormContainer';
import ListMessage from '../components/ListMessage';

import HeaderPerfil from '../components/HeaderPerfil';

import './RightContainer.css';

export default function RightContainer({ contact }){
    return(
        <section>
            <div className="right-container">
                <HeaderPerfil name={contact.name} />
                <ListMessage contact={contact}/>
                <FormContainer contact={contact} />
            </div>
    </section>
    );
}