// components/SplitTitle.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";

interface SplitTitleProps {
  labelMain: string;
  labelSub: string;
  labelItemOne: string;
  labelItemTwo: string;
  className?: string;
}

export function SplitTitle({
  labelMain,
  labelSub,
  labelItemOne,
  labelItemTwo,
  className = "",
}: SplitTitleProps) {
  const [expanded, setExpanded] = useState(false);
  const items = [
    { key: "sub", label: labelSub, italic: true },
    { key: "one", label: labelItemOne, italic: false },
    { key: "two", label: labelItemTwo, italic: false },
  ];

  return (
    <div className={clsx("relative inline-block", className)}>
      <div
        onClick={() => setExpanded((v) => !v)}
        className="cursor-pointer select-none text-2xl font-bold"
      >
        {labelMain}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-0 mt-1 bg-white rounded shadow-lg -z-10"
          >
            <div className="flex flex-col space-y-1 p-2">
              {items.map((item, i) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: i * 0.05, duration: 0.15 }}
                  className={clsx("cursor-pointer text-lg", item.italic && "italic")}
                  onClick={() => setExpanded(false)}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
