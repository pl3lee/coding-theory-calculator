import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
const Algorithm = ({
  name,
  input,
  steps,
}: {
  name: string;
  input: string;
  steps: string[];
}) => {
  return (
    <div className="w-full flex flex-col gap-2 shadow-lg rounded-lg py-4 px-6 mx-auto bg-blue-50">
      <h2 className="text-2xl font-bold text-gray-900 font-mono">
        Algorithm - {name}
      </h2>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        className="text-gray-800 text-xl font-mono"
      >
        {`Input: ${input}`}
      </ReactMarkdown>
      <ol type="1" start={1} className="">
        {steps.map((step, i) => {
          return (
            <li key={i} className="flex gap-3">
              <span className="font-mono flex text-xl">{i + 1}:</span>
              <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                className="text-gray-800 text-xl font-mono"
              >
                {`${step}`}
              </ReactMarkdown>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Algorithm;
