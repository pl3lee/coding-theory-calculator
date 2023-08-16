import Definition from "@/components/Definition";
import Algorithm from "@/components/Algorithm";
import HammingDistanceCalculator from "./components/HammingDistanceCalculator";

const CalculateHamming = () => {
  return (
    <div className="w-full flex justify-center items-start p-2">
      <div className="p-5 flex flex-col items-center gap-5 max-w-screen-xl w-full">
        <h1 className="w-full flex justify-center text-xl md:text-3xl lg:text-5xl font-bold">
          Calculating Hamming Distance
        </h1>
        <div className="w-full">
          <Definition
            name="Hamming Distance"
            text="The Hamming distance between two strings of equal length is the number of coordinate positions in which they differ. The hamming distance of a code is the minimum Hamming distance between any two distinct codewords."
          />
        </div>
        <HammingDistanceCalculator />
      </div>
    </div>
  );
};

export default CalculateHamming;
