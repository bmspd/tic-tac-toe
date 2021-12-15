import './main.scss'
import Board from "./Board";
import ShadowedText from "./shadowedText";

function App() {
  return (
    <div className='tic-tac-toe'>
        <ShadowedText text="TIC TAC TOE" fontSize='40px'/>
        <Board />
    </div>
  );
}

export default App;
