const WordInput = ({
  word,
  setWord,
}: {
  word: number[][];
  setWord: React.Dispatch<React.SetStateAction<number[][]>>;
}) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${word[0].length}, 1fr)`,
    gridTemplateRows: `repeat(1, 1fr)`,
  };

  return (
    <div
      className={`grid max-w-full items-start gap-2 overflow-auto bg-[#111827] p-2 `}
      style={{
        ...gridStyle,
      }}
    >
      {word[0].map((num, j) => {
        return (
          <input
            key={`${j}`}
            type="number"
            value={num.toString()}
            className="w-12 h-12 overflow-x-auto flex justify-center text-center focus:outline-none bg-gray-900 text-xl"
            onChange={(e) =>
              setWord((prevMatrix: number[][]) => {
                const newMatrix = [...prevMatrix];
                newMatrix[0][j] = Number(e.target.value);
                return newMatrix;
              })
            }
          />
        );
      })}
    </div>
  );
};

export default WordInput;
