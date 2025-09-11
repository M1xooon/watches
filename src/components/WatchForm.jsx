import React from 'react';

export default class WatchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', offset: '' }; 
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const name = this.state.name.trim();
    const offset = parseFloat(this.state.offset);
    if (!name) return alert('Введите название');
    if (Number.isNaN(offset)) return alert('Введите корректное числовое смещение (например 3 или -5)');
    this.props.onAdd({ name, offset });
    this.setState({ name: '', offset: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="controls">
        <input
          name="name"
          type="text"
          placeholder="Название (например Moscow)"
          value={this.state.name}
          onChange={this.onChange}
        />
        <input
          name="offset"
          type="number"
          step="0.5"
          placeholder="Смещение от GMT (например 3, -5)"
          value={this.state.offset}
          onChange={this.onChange}
        />
        <button type="submit">Добавить</button>
      </form>
    );
  }
}
