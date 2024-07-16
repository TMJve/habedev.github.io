import React from 'react';

const memories = [
  { year: '2015', event: 'First met' },
  { year: '2016', event: 'First date' },
  { year: '2020', event: 'Moved in together' },
];

const MemoryTimeline = () => (
  <section className="p-6">
    <h2 className="text-2xl font-bold mb-4">Memory Timeline</h2>
    <ul className="list-disc pl-6">
      {memories.map((memory, index) => (
        <li key={index} className="mb-2">
          <span className="font-semibold">{memory.year}</span>: {memory.event}
        </li>
      ))}
    </ul>
  </section>
);

export default MemoryTimeline;
