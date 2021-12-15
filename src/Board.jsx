import React, {useEffect, useState} from 'react';
import Field from "./Field";
import HistoryPart from "./HistoryPart";
const startField = [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
]
const transpose = m => m[0].map((x,i) => m.map(x => x[i]))
const isGameStillPlaying = (field) => {
    if (!field.some(row => row.includes('.')))
        return false;
    if(!field.every(row => {
        return row.every(el => {
            return !row.every(el => el === row[0] && !row.includes('.'));
        });
    })) return false
    if(!transpose(field).every(row => {
        return row.every(el => {
            return !row.every(el => el === row[0] && !row.includes('.'));
        });
    })) return false
    const mainD = [field[0][0], field[1][1], field[2][2]]
    const secondD = [field[2][0], field[1][1], field[0][2]]
    if (mainD.every(el => el === mainD[0] && !mainD.includes('.'))
        || secondD.every(el => el === secondD[0] && !secondD.includes('.')))
        return false
    return true;
}
const Board = () => {
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [history, setHistory] = useState([]);
    const [field, setField] = useState(startField)
    const [gameStatus, setGameStatus] = useState(true);
    const [isRunningBack, setIsRunningBack] = useState(false)
    const [currentMove, setCurrentMove] = useState(-1)
    const clickFieldHandler = (x,y) => () => {
        if (currentMove < history.length - 1) {
            setHistory(history.slice(0, currentMove+1))
            setCurrentPlayer(currentMove % 2 === 0 ? 1 : 2)
        }
        if (field[x][y] !== '.' || !gameStatus) {
            return;
        }
        let newField = field.map(row => row.slice(0));
        currentPlayer === 1 ? newField[x][y] = 'X' : newField[x][y] = 'O';
        currentPlayer === 1? setCurrentPlayer(2) : setCurrentPlayer(1)
        setField(newField)
    }
    useEffect(() => {
        if (isRunningBack) {
            setIsRunningBack(!isRunningBack)
            setCurrentPlayer(currentMove % 2 === 0 ? 1 : 2)
            setGameStatus(isGameStillPlaying(field));
            return;
        }
        setCurrentMove(currentMove+1);
        setGameStatus(isGameStillPlaying(field));
        setHistory([...history, field])
    }, [field])

    return (
        <>
            <div style={{display:'flex'}}>
            <h2>{gameStatus ? `PLAYER ${currentPlayer} TURN` : `PLAYER ${currentPlayer === 1 ? 2 : 1} WINS`}</h2>
            </div>
        <div className="game-board">
            <Field onClick={clickFieldHandler(0,0)} currentSign={field[0][0]}/>
            <Field onClick={clickFieldHandler(0,1)} currentSign={field[0][1]}/>
            <Field onClick={clickFieldHandler(0,2)} currentSign={field[0][2]}/>
            <Field onClick={clickFieldHandler(1,0)} currentSign={field[1][0]}/>
            <Field onClick={clickFieldHandler(1,1)} currentSign={field[1][1]}/>
            <Field onClick={clickFieldHandler(1,2)} currentSign={field[1][2]}/>
            <Field onClick={clickFieldHandler(2,0)} currentSign={field[2][0]}/>
            <Field onClick={clickFieldHandler(2,1)} currentSign={field[2][1]}/>
            <Field onClick={clickFieldHandler(2,2)} currentSign={field[2][2]}/>
        </div>
            <h2 style={{color:'white', fontSize: '30px'}}>{history.length - 1}({currentMove})</h2>
            <div style={{display:'flex', gap: '20px'}}>
                {history.map((el, index) =>
                    <HistoryPart slicedHistory={history.slice(0,index+1)}
                                 index={index}
                                 setHistory={setHistory}
                                 setField={setField}
                                 setIsRunningBack={setIsRunningBack}
                                 setCurrentMove={setCurrentMove}
                                 key={`__history-part-${index}`}
                    />)
                }
            </div>

            <h3 style={{color:'white'}}>{gameStatus ? 'game is playing' : 'game is finished'}</h3>
        </>
    );
};

export default Board;