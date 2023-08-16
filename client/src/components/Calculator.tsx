import MatrixInput from "./MatrixInput";
const Calculator = ({
  resultName,
  results,
  calculatorItems,
  showModulo = false,
  modulo = null,
  setModulo = null,
}: {
  resultName: string;
  results: {
    result: string;
    error: boolean;
    loading: boolean;
  };
  calculatorItems: {
    item: JSX.Element;
    itemName: string;
  }[];
  showModulo?: boolean;
  modulo?: number | null;
  setModulo?: React.Dispatch<React.SetStateAction<number>> | null;
}) => {
  return (
    <div className="flex flex-col gap-10 min-w-full max-w-screen-sm md:max-w-screen-md bg-gray-900 rounded-xl py-4 text-white">
      <div className="flex justify-between">
        <div className="flex flex-col px-10">
          <h3 className="text-gray-300 text-xl">{resultName}</h3>
          <p className="text-white text-3xl font-bold w-full max-w-[10rem] md:max-w-[20rem] lg:max-w-[50rem] overflow-x-auto py-1 ">
            {results.error
              ? "There was an error"
              : results.loading
              ? "Calculating..."
              : results.result}
          </p>
        </div>
        {showModulo && (
          <div className="flex justify-between">
            <div className="flex flex-col px-10">
              <h3 className="text-gray-300 text-xl">Modulo</h3>
              <input
                type="number"
                value={modulo?.toString()}
                className="focus:outline-none text-white bg-gray-900 w-12 h-12 flex justify-center items-center text-center text-3xl"
                onChange={(e) => {
                  if (setModulo === null) return;
                  setModulo(Number(e.target.value));
                }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="px-10 flex flex-col gap-10">
        {calculatorItems.map((calculatorItem, index) => {
          return (
            <CalculatorItem
              key={index}
              title={calculatorItem.itemName}
              item={calculatorItem.item}
            />
          );
        })}
      </div>
    </div>
  );
};

const CalculatorItem = ({
  title,
  item,
}: {
  title: string;
  item: JSX.Element;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-gray-300 text-xl">{title}</h3>
      {item}
    </div>
  );
};

export default Calculator;
