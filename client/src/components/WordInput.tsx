const WordInput = ({
  word,
  setWord,
}: {
  word: number[];
  setWord: (word: number[]) => void;
}) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${word.length}, 1fr)`,
    gridTemplateRows: `repeat(1, 1fr)`,
  };

  return (
    <div
      className={`grid max-w-full items-start gap-2 overflow-auto bg-[#111827] p-2 `}
      style={{
        ...gridStyle,
      }}
    >
      {word.map((num, j) => {
        return (
          <input
            key={`${j}`}
            type="number"
            value={num.toString()}
            className="w-12 h-12 overflow-x-auto flex justify-center text-center focus:outline-none bg-gray-900 text-xl"
            onChange={(e) => {
              const newWord = [...word];
              newWord[j] = parseInt(e.target.value);
              setWord(newWord);
            }}
          />
        );
      })}
    </div>
  );
};

export default WordInput;
