import Definition from "@/components/Definition";
import Algorithm from "@/components/Algorithm";
import DecodeC24Calculator from "./components/DecodeC24Calculator";
import { Info } from "@/components/Info";

const DecodeC24 = () => {
  return (
    <div className="w-full flex justify-center items-start p-2">
      <div className="p-5 flex flex-col items-center gap-5 max-w-screen-xl">
        <h1 className="w-full flex justify-center text-xl md:text-3xl lg:text-5xl font-bold">
          Decoding the Extended Golay Code (C24)
        </h1>
        <div className="w-full">
          <Algorithm
            name="Decoding Algorithm for C24"
            input="A received word $$r = (x,y)$$."
            steps={[
              "Compute $$s_1 = [I_{12} | B]r^T$$. If $$s_1 = 0$$, then accept $$r$$; STOP.",
              "If $$1 \\leq w(s_1) \\leq 3$$, then set $$e = (s_1^T, 0)$$ and decode $$r$$ to $$c = r - e$$ and STOP.",
              "Compare $$s_1$$ to the rows of $$B$$. If row $$i$$ of $$B$$ differs in exactly one position (say $$j$$) or two positions (say $$j$$ and $$k$$), then correct $$x$$ in position $$j$$, or positions $$j$$ and $$k$$; correct $$y$$ in position $$i$$; STOP",
              "Compute $$s_2 = [B | I_{12}]r^T$$. If $$w(s_2) \\leq 3$$, then set $$e = (0, s_2^T)$$ and decode $$r$$ to $$c = r - e$$ and STOP.",
              "Compare $$s_2$$ to the rows of $$B$$. If row $$i$$ of $$B$$ differs in exactly one position (say $$j$$) or two positions (say $$j$$ and $$k$$), then correct $$y$$ in position $$j$$, or positions $$j$$ and $$k$$; correct $$x$$ in position $$i$$; STOP",
              "Reject $$r$$",
            ]}
          />
          <Info info="You can now paste in 24-bit binary strings into the calculator. Simply paste the 24-bit binary string into one of the input boxes, and it will be automatically entered into the calculator!" />
        </div>
        <DecodeC24Calculator />
      </div>
    </div>
  );
};

export default DecodeC24;
