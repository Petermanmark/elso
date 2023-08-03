import { useState } from 'react';

export interface CounterProps {
  initialCount: number;
}

export function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.initialCount);
  let color: string;
  if (count < 0) {
    color = 'text-red-500 ';
  } else if (count > 0) {
    color = 'text-green-500 ';
  } else {
    color = 'text-blue-500 ';
  }

  return (
    <div className="flex text-2xl border-2 w-96 border-black rounded p-2 m-4 justify-center gap-2">
      <button
        onClick={() => setCount(count - 1)}
        className="p-2 border-2 border-black rounded"
      >
        -
      </button>
      <span className={'p-2 ' + color}>{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="p-2 border-2 border-black rounded"
      >
        +
      </button>
    </div>
  );
}
