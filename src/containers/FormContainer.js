import React, {useState} from 'react';

export default function FormContainer({ contact }){
    const [mensagem, setMensagem] = useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        // console.log(contact.id);
        if(mensagem){
        //   setSelectedChatRec([...contatoList[selectedChatId].msgReceive, mensagem])
        //   console.log(contatoList[selectedChatId].msgReceive)
          setMensagem("");  
    };
  
    // function handleSubmit(e){
    //   e.preventDefault();
    //   if(mensagem){
    //     setMensagens([...mensagens, mensagem]);
    //     setMensagem("");  
    //   };
      
      const objDiv = document.getElementById("mensagens");
      objDiv.scrollTop = objDiv.scrollHeight;
      
      //solucao encontrada pra manter a scroll em baixo ou usando o flex-direction:collum-reverse mas nao achei legal
    }

    function handleChange(e){
        setMensagem(e.target.value);
    }

    return(
        <footer className="form-container">
            <form className="mensagem-send" onSubmit={handleSubmit}>
                <input
                className="Todo-input"
                value={mensagem}
                onChange={handleChange}
                placeholder="Digite uma nova mensagem"
                />
                <button type="submit" >
                Adicionar
                </button>
            </form>
        </footer>
    )
}
