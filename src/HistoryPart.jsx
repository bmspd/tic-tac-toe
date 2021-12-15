import React from 'react';

const HistoryPart = ({setCurrentMove, setIsRunningBack, setField, setHistory, slicedHistory, index}) => {
    const onClickHandler = () => {
        setIsRunningBack(true);
        setField(slicedHistory[slicedHistory.length - 1].map(row=>row.slice(0)))
        setCurrentMove(index)
    }
    return (
        <div onClick={onClickHandler} className="history-part">
            <p>{index}</p>
        </div>
    );
};

export default HistoryPart;