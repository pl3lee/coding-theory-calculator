import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const Definition = ({ name, text }: { name: string; text: string }) => {
  return (
    <Accordion className="bg-teal-50 w-full">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="w-full border-none"
      >
        <h2 className="text-2xl font-bold text-gray-900 font-mono">
          Definition - {name}
        </h2>
      </AccordionSummary>
      <AccordionDetails>
        <ReactMarkdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          className="text-gray-800 text-xl font-mono"
        >
          {text}
        </ReactMarkdown>
      </AccordionDetails>
    </Accordion>
  );
};

export default Definition;
