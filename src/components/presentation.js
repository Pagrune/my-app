import React from 'react';
import imager from '../img/DSC_0436.jpg';

const Presentation = () => {
    return (
        <div className='ma_presentation'>
            <div>
            <h1 className='mon_nom'>GRUNEWALD Pauline</h1>
            <div>239, Rue de Romagny</div>
            </div>
            <img className='mon_image' src={imager}></img>
        </div>
    );
};



export default Presentation;