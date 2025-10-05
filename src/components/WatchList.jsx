import React from 'react';
import Watch from './Watch';

export default function WatchList({ watches, currentTime, onRemove }) {
  if (!watches.length) return <div>Часы не добавлены</div>;

  return (
    <div>
      {watches.map((w) => (
        <Watch key={w.id} name={w.name} offset={w.offset} currentTime={currentTime} onRemove={() => onRemove(w.id)} />
      ))}
    </div>
  );
}
