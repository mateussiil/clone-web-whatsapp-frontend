import React from 'react';
import fundoVazio from '../assets/fundoVazio.png';

export default function None(){
    return(
        <div className="right-container">
            <img src={fundoVazio} alt="none" />
        </div>
    )
};