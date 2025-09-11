import React from 'react';
import WatchForm from './components/WatchForm';
import WatchList from './components/WatchList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watches: [
        { id: 1, name: 'London', offset: 0 },
        { id: 2, name: 'New York', offset: -4 }, 
      ],
      nextId: 3
    };
  }

  handleAdd = ({ name, offset }) => {
    this.setState((s) => ({
      watches: [...s.watches, { id: s.nextId, name, offset }],
      nextId: s.nextId + 1
    }));
  };

  handleRemove = (id) => {
    this.setState((s) => ({ watches: s.watches.filter(w => w.id !== id) }));
  };

  render() {
    return (
      <div className="app">
        <h1>Мировые часы</h1>
        <WatchForm onAdd={this.handleAdd} />
        <WatchList watches={this.state.watches} onRemove={this.handleRemove} />
      </div>
    );
  }
}
