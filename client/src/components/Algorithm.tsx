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
      <ol>
        {steps.map((step, i) => {
          return (
            <li key={i}>
              <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                className="text-gray-800 text-xl font-mono"
              >
                {`${i}. ${step}`}
              </ReactMarkdown>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Algorithm;
