import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
const Definition = ({ name, text }: { name: string; text: string }) => {
  return (
    <div className="w-full flex flex-col gap-2 shadow-lg rounded-lg py-4 px-6 mx-auto bg-teal-50">
      <h2 className="text-2xl font-bold text-gray-900 font-mono">
        Definition - {name}
      </h2>
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex]}
        className="text-gray-800 text-xl font-mono"
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};

export default Definition;
