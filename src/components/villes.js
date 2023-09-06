import React from 'react';

function Villes({villes}){
    // const villes = ['Strasbourg', 'Paris', 'Mulhouse']
    // return (
    //     <div className='milieu'>
    //         <h3>Les villes</h3>
    //         <ul>
    //             {villes.map((ville,index)=>(
    //                 <li key={`${ville}-${index}`}>{ville}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );

    
    return (
            <div className='milieu'>
                <h3>Les villes</h3>
                <ul>
                    {villes.map((ville)=>(
                        ville.isMine ?(
                            <li className='red' key={ville.id}>{ville.nom}</li>
                        ) : (
                            <li key={ville.id}>{ville.nom}</li>
                        )
                    ))}
                </ul>
            </div>
        );
};

export default Villes;