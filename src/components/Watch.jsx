import React from 'react';

export default function Watch({ name, offset, currentTime, onRemove }) {
  const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
  const localTime = new Date(utc + offset * 3600000);

  const formatTime = (date) => {
    const pad = (n) => String(n).padStart(2, '0');
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  };

  return (
    <div className="clock">
      <div>
        <div className="name">{name}</div>
        <div className="time">{formatTime(localTime)}</div>
      </div>
      <button className="remove-btn" onClick={onRemove}>✕</button>
    </div>
  );
}
