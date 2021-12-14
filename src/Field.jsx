import React from 'react';
import circle from './assets/circle.png'
import cross from './assets/cross.png'
import empty from './assets/empty.png'
const neededImage = (currentSign) => {
    switch (currentSign) {
        case 'O':
            return <img width='50' height='50' src={circle} alt=''/>
        case 'X':
            return <img width='50' height='50' src={cross} alt=''/>
        default:
            return <img width='30' height='30' src={empty} alt=''/>
    }
}
const Field = ({currentSign, onClick}) => {
    return (
        <div onClick={onClick} className="game-field">
            {neededImage(currentSign)}
        </div>
    );
};

export default Field;