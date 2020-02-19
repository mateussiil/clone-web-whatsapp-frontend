import React, { useState } from 'react';

export default function SearchProfile({ contacts, getSearch}){
    //contacts é a lista de todos os contatos que componente recebe do pai-LeftContainer
    const [ contato, setContato ] = useState("");

    function searchContact(){
        if(contato){
           getSearch(contacts.filter((contactFilter)=>{
                if(contactFilter.name.indexOf(contato) != -1){
                    return contactFilter
                }
            }))
        }
    }
    
    function handleSubmit(e){
        e.preventDefault();
        if(contato){
            setContato("");  
        }
    }
    
    function handleChange(e){
        if(e.target.value.length){
            searchContact();
            setContato(e.target.value);
        }
        if(e.target.value.length==0){
            setContato("");
        }
    }

    return(
        <form className="input-block container-search" onSubmit={handleSubmit}>
            <input 
                className="search-input"
                value={contato}
                onChange={handleChange}
                title="procurar uma nova conversa"
                placeholder="procurar uma nova conversa"
            />
        </form>
    )
}