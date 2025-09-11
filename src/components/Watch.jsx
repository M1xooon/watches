import React from 'react';

export default class Watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { now: this.computeNow() };
    this.tick = this.tick.bind(this);
  }

  computeNow() {
    const { offset } = this.props; 
    const utc = Date.now() + new Date().getTimezoneOffset() * 60000;
    const localTime = new Date(utc + offset * 3600000);
    return localTime;
  }

  formatDate(d) {
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({ now: this.computeNow() });
  }

  render() {
    const { name, onRemove } = this.props;
    const { now } = this.state;
    return (
      <div className="clock">
        <div>
          <div className="name">{name}</div>
          <div className="time">{this.formatDate(now)}</div>
        </div>
        <div>
          <button className="remove-btn" onClick={onRemove} title="Удалить">✕</button>
        </div>
      </div>
    );
  }
}
