import React from 'react';
import Watch from './Watch';

export default class WatchList extends React.Component {
  render() {
    const { watches, onRemove } = this.props;
    if (!watches.length) return <div>Часы не добавлены</div>;
    return (
      <div>
        {watches.map((w) => (
          <Watch
            key={w.id}
            name={w.name}
            offset={w.offset}
            onRemove={() => onRemove(w.id)}
          />
        ))}
      </div>
    );
  }
}
