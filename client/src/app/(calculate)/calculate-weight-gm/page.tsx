import Definition from "@/components/Definition";
import Algorithm from "@/components/Algorithm";
import WeightGMCalculator from "./components/WeightGMCalculator";

const CalculateWeightGM = () => {
  return (
    <div className="w-full flex justify-center items-start p-2">
      <div className="p-5 flex flex-col items-center gap-5 max-w-screen-xl w-full">
        <h1 className="w-full flex justify-center text-xl md:text-3xl lg:text-5xl font-bold overflow-auto">
          Calculating Weight of a Linear Code from a GM
        </h1>
        <div className="w-full">
          <Definition
            name="Weight"
            text="The Hamming weight $$w(v)$$ of a vector $$v \in V_n(F)$$ is the number of nonzero coordinates in $$v$$. The Hamming weight of a linear code $$C$$ is $$w(C) = \min \{w(v) : v \in C, v \text{ not } 0\}$$."
          />
        </div>
        <WeightGMCalculator />
      </div>
    </div>
  );
};

export default CalculateWeightGM;
