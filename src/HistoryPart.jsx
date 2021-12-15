import React, {useEffect, useRef} from 'react';
import VanillaTilt from "vanilla-tilt";

const HistoryPart = ({setCurrentMove, setIsRunningBack, setField, slicedHistory, index}) => {
    const historyPartRef = useRef(null)
    useEffect(() => {
        VanillaTilt.init(historyPartRef.current, {
            scale: 1.8,
            max: 45
        })
    }, [historyPartRef])
    const onClickHandler = () => {
        setIsRunningBack(true);
        setField(slicedHistory[slicedHistory.length - 1].map(row=>row.slice(0)))
        setCurrentMove(index)
    }
    return (
        <div onClick={onClickHandler} ref={historyPartRef} className="history-part">
            <p>{index}</p>
        </div>
    );
};

export default HistoryPart;