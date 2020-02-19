import React, { useState, useEffect} from 'react';

export default function SearchProfile({ contacts, getSearch}){
    //contacts é a lista de todos os contatos que componente recebe do pai-LeftContainer
    const [ contato, setContato ] = useState("");

    function searchContact(){
        getSearch(contacts.filter(contactFilter=>{
            if(contactFilter.name.indexOf(contato) !== -1){
                return contactFilter
            }
        }))
    }

    function handleSubmit(e){
        e.preventDefault();
        setContato("");
    }
    
    function handleChange(e){
        console.log(e.target.value.length)
        if(e.target.value.length){
            setContato(e.target.value);
            searchContact();

            console.log('ok');
            console.log('vazio: ', contato);
        }
        if(e.target.value.length===0){
            console.log('Nao ok');
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