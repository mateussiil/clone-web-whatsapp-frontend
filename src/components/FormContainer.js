import React, {useState} from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendIcon from '@material-ui/icons/Send';


export default function FormContainer({ contact, newMessage }){
    const [mensagem, setMensagem] = useState("");

    function handleSubmit(e){
      e.preventDefault();
      if(mensagem){
        newMessage(mensagem, contact.id)
        // setMensagens([...contact.msg, mensagem]);
        setMensagem("");  
      };
      const objDiv = document.getElementById("mensagens");
      objDiv.scrollTop = objDiv.scrollHeight;
      //solucao encontrada pra manter a scroll em baixo ou usando o flex-direction:collum-reverse mas nao achei legal
    }

    function handleChange(e){
        setMensagem(e.target.value);
    }

    return(
            <form className="input-block container-send" onSubmit={handleSubmit}>
                <div className="emoticon-div">
                  <InsertEmoticonIcon style={{ fontSize: 35, color: '#b3b3b3' }}/>
                </div>
                <input
                className="send-input"
                value={mensagem}
                onChange={handleChange}
                placeholder="Digite uma nova mensagem"
                />
                {/* <button type="submit" style={{display:'none'}}/> */}
                <div className="emoticon-div">
                  <SendIcon 
                    className="emoticon-icon"
                    style={{ fontSize: 35, color: '#b3b3b3' }}
                  />
                </div>
            </form>
    )
}
