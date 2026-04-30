import { useState } from 'react';

const thoughts = [
  "Why do we park in driveways and drive on parkways?",
  "A 'week' is just seven days pretending to be a unit.",
  "Every expert was once a beginner who didn't quit.",
  "You've never seen your own face in real life, only reflections.",
  "Somewhere, someone is having the best day of their life right now.",
  "A snail can sleep for 3 years. Respect.",
  "Your future self is watching you make decisions right now.",
  "Trying and failing is just succeeding at learning.",
  "The fact that we exist at all is genuinely insane.",
  "Your skeleton has been with you since day one. Loyal.",
];

function getDailyThought() {
  const day = Math.floor(Date.now() / 86400000);
  return thoughts[day % thoughts.length];
}

const ThoughtBubble = () => {
  const [thought, setThought] = useState(getDailyThought());
  const [index, setIndex] = useState(0);

  const refresh = () => {
    setIndex(i => (i + 1) % thoughts.length);
    setThought(thoughts[(index + 1) % thoughts.length]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-[220px]">
      <div
        onClick={refresh}
        className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-2xl p-3 text-xs leading-relaxed cursor-pointer shadow-sm"
        title="click for another"
      >
        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">thought of the day</p>
        <p className="text-gray-700 dark:text-gray-200">{thought}</p>
        <div className="absolute -bottom-3 left-5 w-3 h-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full" />
        <div className="absolute -bottom-5 left-3 w-2 h-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-full" />
      </div>
      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mt-3 ml-2 text-base">🧠</div>
    </div>
  );
};

export default ThoughtBubble;
