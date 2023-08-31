/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Square = ({ item, turn, setTurn, id, board, setBoard, winningMessage }) => {

   const handleClick = (e) => {
      const notTaken = !board[id];
      if (winningMessage) {
         return;
      } else if (notTaken) {
         if (turn === "circle") {
            handleChange('circle');
            setTurn('cross')
         } else if (turn === "cross") {
            handleChange('cross');
            setTurn('circle')
         }
      }
   };
   const handleChange = (change) => {
      const copyBoard = [...board];
      copyBoard[id] = change;
      setBoard(copyBoard);
   };
   return (
      <div onClick={handleClick} className=" border font-bold text-[80px] w-[calc(100%/3)] h-[calc(100%/3)] flex items-center justify-center">
         <div
            className={
               item === 'circle'
                  ? 'text-blue-600'
                  : 'text-red-600'
            }
         >
            {item ? (item === "circle" ? "O" : "X") : ""}
         </div>
      </div>

   );
};

export default Square;
