import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "components/motion-primitives/accordion";
import { Plus } from "lucide-react";

interface QA {
  question: string;
  answer: string;
}

interface AccordionVariantProps {
  data: QA[];
}

export default function AccordionVariant({ data }: AccordionVariantProps) {
  return (
    <Accordion
      className="flex w-full flex-col"
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      variants={{
        expanded: { opacity: 1, scale: 1 },
        collapsed: { opacity: 0, scale: 0.7 },
      }}
    >
      {data.map(({ question, answer }, idx) => {
        const value = `item-${idx}`;
        return (
          <AccordionItem key={value} value={value} className="py-2">
            <AccordionTrigger className="w-full py-0.5 text-left bg-contrast-lower2 rounded-lg p-4 data-expanded:bg-contrast-high-2 data-expanded:text-contrast-lowest">
              <div className="flex items-center justify-between">
                <div className="ml-2 font-medium max-w-5/7">{question}</div>
                <Plus className=" h-5 w-5 text-zinc-950 transition-transform duration-200 group-data-expanded:rotate-45 group-data-expanded:text-contrast-lowest dark:text-zinc-50" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="origin-leftrounded-xl rounded-xl whitespace-pre-line">
              <p className="pl-6 pr-2 pt-3 pb-3 text-contrast-higher text-sm">
                {answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
