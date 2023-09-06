
import React, {useState} from 'react';



function Compteur(){
    const [count, setCount] = useState(0);

const handleClick = ()=> {
  setCount(count+1);
};
    return(
        <div className='milieu'>
        <p>Compteur : {count}</p>
        <button onClick={handleClick}>Incrémenter</button>
      </div>
    );
   
}
export default Compteur;