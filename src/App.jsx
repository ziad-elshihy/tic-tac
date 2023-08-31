import "./index.css";
import Square from "./components/Square";
import { useEffect, useState } from "react";

const winningCombos = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
];
export default function Home() {
   const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
   const [turn, setTurn] = useState("circle");
   const [winningMessage, setWinningMessage] = useState("");

   useEffect(() => {
      winningCombos.forEach((combo) => {
         const comboCircle = combo.every((item) => board[item] === "circle");
         const comboCross = combo.every((item) => board[item] === "cross");

         if (comboCircle) {
            setWinningMessage("'O' wins!");
         } else if (comboCross) {
            setWinningMessage("'X' wins!");
         }
      });
   }, [board, winningMessage]);
   useEffect(() => {
      if ((board.every((item) => item !== '')) && !winningMessage) {
         setTurn('draw')
         setWinningMessage('Draw!!!')
      }
   }, [board, winningMessage])
   console.log(board);
   return (
      <main className=" font-bold flex h-screen flex-col items-center justify-center gap-5 ">
         <div className="flex flex-wrap border w-[300px] h-[300px]">
            {board.map((item, index) => {
               return (
                  <Square
                     id={index}
                     key={index}
                     turn={turn}
                     setTurn={setTurn}
                     board={board}
                     setBoard={setBoard}
                     item={item}
                     winningMessage={winningMessage}
                  />
               );
            })}
         </div>

         <div>
            {!winningMessage
               ? <div>
                  <span
                     className={
                        turn === "circle"
                           ? "text-blue-600"
                           : "text-red-600"
                     }>
                     {turn === 'circle' ? 'O' : 'X'}
                  </span>{" "}
                  turn!
               </div>
               : <div
                  className={
                     turn === "circle"
                        ? "text-red-600"
                        : (turn === "cross" ? "text-blue-600" : 'text-green-600 ')
                  }
               >
                  {winningMessage}
               </div>
            }
         </div>
         <button
            onClick={() => window.location.reload()}
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         >
            New game
         </button>
      </main>
   );
}