import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
    <Accordion className="bg-blue-50 w-full">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="w-full border-none"
      >
        <h2 className="text-2xl font-bold text-gray-900 font-mono">
          Algorithm - {name}
        </h2>
      </AccordionSummary>
      <AccordionDetails>
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
              <li key={i} className="flex gap-3 align-top">
                <span className="font-mono flex text-xl text-gray-800">
                  {i + 1}:
                </span>
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
      </AccordionDetails>
    </Accordion>
  );
};

export default Algorithm;
