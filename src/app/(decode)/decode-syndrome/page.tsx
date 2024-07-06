import Definition from "@/components/Definition";
import Algorithm from "@/components/Algorithm";
import DecodeSyndromeCalculator from "./components/DecodeSyndromeCalculator";

const DecodeSyndrome = () => {
  return (
    <div className="w-full flex justify-center items-start p-2">
      <div className="p-5 flex flex-col items-center gap-5 max-w-screen-xl">
        <h1 className="w-full flex justify-center text-xl md:text-3xl lg:text-5xl font-bold">
          Syndrome Decoding
        </h1>
        <div>
          <Definition
            name="Syndrome"
            text={`Let $$H$$ be a PCM for an $$(n,k)$$-code $$C$$ over $$F$$. Let $$x \\in V_n(F)$$. The syndrome of $$x$$ (w.r.t. $$H$$) is $$s = Hx^T$$.`}
          />
          <Algorithm
            name="Syndrome Decoding Algorithm (CMLD) for General Binary Linear Codes"
            input="PCM $$H$$ and a received word $$r \in V_n(F)$$."
            steps={[
              "Create a table of coset leaders and their syndromes.",
              "Compute $$s = Hr^T$$",
              "Look up the coset leader corresponding to $$s$$, say $$\\ell$$.",
              "Decode $$r$$ to $$c = r - \\ell$$. ",
            ]}
          />
        </div>
        <DecodeSyndromeCalculator />
      </div>
    </div>
  );
};

export default DecodeSyndrome;
