import ChangeDim from "./ChangeDim";
const WordsInput = ({
  words,
  setWords,
  minimumWords,
}: {
  words: number[][];
  setWords: React.Dispatch<React.SetStateAction<number[][]>>;
  minimumWords: number;
}) => {
  const handleAddWord = () => {
    const newWord = [];
    for (let i = 0; i < words[0].length; i++) {
      newWord.push(0);
    }
    const newWords: number[][] = [...words, newWord];
    setWords(newWords);
  };
  const handleRemoveWord = () => {
    if (words.length === minimumWords) return;
    const newWords: number[][] = [...words];
    newWords.pop();
    setWords(newWords);
  };
  const handleAddCol = () => {
    const newWords: number[][] = [];
    for (let i = 0; i < words.length; i++) {
      const newWord: number[] = [...words[i], 0];
      newWords.push(newWord);
    }
    setWords(newWords);
  };

  const handleRemoveCol = () => {
    if (words[0].length === 1) return;
    const newWords: number[][] = [];
    for (let i = 0; i < words.length; i++) {
      const newWord: number[] = [...words[i]];
      newWord.pop();
      newWords.push(newWord);
    }
    setWords(newWords);
  };

  const handleChangeWord = (word: number[], index: number) => {
    const newWords: number[][] = [...words];
    newWords[index] = word;
    setWords(newWords);
  };

  return (
    <div className="flex flex-col items-start w-[300px] md:w-[500px] lg:w-full gap-3">
      <div className="flex flex-row gap-16 w-full justify-start">
        <ChangeDim
          dim={words.length}
          addDim={handleAddWord}
          removeDim={handleRemoveWord}
          name="Words"
        />
        <ChangeDim
          dim={words[0].length}
          addDim={handleAddCol}
          removeDim={handleRemoveCol}
          name="Length"
        />
      </div>

      <div className="flex flex-col items-start justify-start w-full gap-6">
        {words.map((word, index) => {
          return (
            <div className="flex justify-start items-start w-full" key={index}>
              <WordInput
                word={word}
                setWord={(word) => handleChangeWord(word, index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

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
      className="p-1 relative max-w-full overflow-auto"
      style={{
        background: `linear-gradient(to right, white 0 calc(20px), #111827 calc(20px) calc(100% - 20px), white calc(100% - 20px) 100%)`,
      }}
    >
      <div
        className={`grid max-w-full items-start gap-0 overflow-auto bg-[#111827] p-2 `}
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
              className="w-7 h-10 overflow-x-auto flex justify-center text-center focus:outline-none bg-gray-900 text-xl"
              onChange={(e) => {
                const newWord = [...word];
                newWord[j] = Number(e.target.value);
                setWord(newWord);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WordsInput;
