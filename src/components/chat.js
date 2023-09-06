import React, {useState} from 'react';

const Chat = () => {
    const [message, setMessage] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();        
        setMessage([...message, {text : document.querySelector('#id_message').value}]);
      };

    return (
        <div className='milieu'>
            <form >
                <label>Mon message</label>
                <input id="id_message" type="text" placeholder='Ecrire ici mon message' ></input>
                <button onClick={onSubmit}>Envoyer mon message</button>
            </form>
            <div>
                {message.map((msg)=>(
                <p key={msg.text}>{msg.text}</p>
            ))}
            </div>
        </div>
       
    );
};

export default Chat;