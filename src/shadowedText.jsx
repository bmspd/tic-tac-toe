import React from 'react';

const ShadowedText = ({text, fontSize='20px'}) => {
    return (
        <div className="__shadowedText">
            <h1 style={{fontSize: fontSize}} className="__text">{text}</h1>
            <h1 style={{fontSize: fontSize}} className="__shadow">{text}</h1>
        </div>
    );
};

export default ShadowedText;