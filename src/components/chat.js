import React, { useState, useEffect} from 'react';


const Chat = () => {
    const [message, setMessage] = useState(
        JSON.parse(localStorage.getItem('messages')) || []
      );
    const [isOpen, setOpen] = React.useState(
        JSON.parse(localStorage.getItem('is-open')) || false
      );

    const onSubmit = (e) => {
        e.preventDefault();        
      
        const newMessages = [...message, { text: document.querySelector('#id_message').value }];
        setMessage(newMessages);

        localStorage.setItem('messages', JSON.stringify(newMessages));
        setOpen(!isOpen);

        document.querySelector('#id_message').value = '';
      };

      useEffect(() => {
        localStorage.setItem('is-open', JSON.stringify(isOpen));
      }, [isOpen]);

    return (
        <div className='milieu'>
            <form onSubmit={onSubmit}>
                <label>Mon message</label>
                <input id="id_message" type="text" placeholder='Ecrire ici mon message' ></input>
                <button type="submit">Envoyer mon message</button>
            </form>
            <div>
                {isOpen && (
                <div>
                    {message.map((msg, index) => (
                    <p key={index}>{msg.text}</p>
                    ))}
                </div>
                )}
            </div>
        </div>
       
    );
};

export default Chat;

// const App = () => {
//     const [isOpen, setOpen] = React.useState(
//       JSON.parse(localStorage.getItem('is-open')) || false
//     );
  
//     const handleToggle = () => {
//       setOpen(!isOpen);
//     };
  
//     React.useEffect(() => {
//       localStorage.setItem('is-open', JSON.stringify(isOpen));
//     }, [isOpen]);
  
//     return (
//       <div>
//         <button onClick={handleToggle}>Toggle</button>
//         {isOpen && <div>Content</div>}
//       </div>
//     );
//   };
  
//   export default App;