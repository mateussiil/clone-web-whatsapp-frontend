import React, { useState, useEffect } from 'react';

export default function SearchProfile({ contacts, getSearch}){
    //contacts é a lista de todos os contatos que componente recebe do pai-LeftContainer
    const [ contato, setContato ] = useState("");
    let cnt;

    function searchContact(){
        getSearch(contacts.filter((contactFilter)=>{
            if(contactFilter.name.indexOf(cnt) !== -1){
                return contactFilter;
            }
        }))
    }
    
    function handleSubmit(e){
        e.preventDefault();
        setContato("");
    }

    function handleChange(e){
        if(e.target.value.length){
            cnt = e.target.value;
            setContato(cnt);
            searchContact();

        }
        if(e.target.value.length===0){
            getSearch([]);
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