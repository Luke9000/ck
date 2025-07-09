'use client';
import React, { useState } from 'react';
import { TransitionPanel } from '@/components/motion-primitives/transition-panel';
import {ITEMS} from '../../../public/data/institutes'

export default function TabsTransitionPanel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='flex flex-col'>
        <h1 className='py-2 text-xl ml-auto'>Направления подготовки</h1>
      <div className='mb-4 flex space-x-2 flex-wrap gap-2 border-t border-zinc-200 dark:border-zinc-700 py-6'>
        {ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-md px-3 py-1  font-medium transition duration-300 ease-in-out  ${
              activeIndex === index
                ? 'bg-accent-higher text-contrast-lowest dark:bg-zinc-800 dark:text-zinc-100 text-sm'
                : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400 text-sm'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className='overflow-hidden border-t border-zinc-200 dark:border-zinc-700'>
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          variants={{
            enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
            center: { opacity: 1, y: 0, filter: 'blur(0px)' },
            exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
          }}
        >
          {ITEMS.map((item, index) => (
            <div key={index} className='py-2'>
                <p className='text-zinc-600 dark:text-zinc-400 text-xs pb-4'>{item.subtitle}</p>
              {item.content.map((line, i) => (
                <h3
                  key={i}
                  className="mb-2 font-semibold text-zinc-800 dark:text-zinc-100"
                >
                  {line}
                </h3>
              ))}
              
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}

