import React, { useState } from 'react';

export default function WatchForm({ onAdd }) {
  const [name, setName] = useState('');
  const [offset, setOffset] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedOffset = parseFloat(offset);
    if (!name.trim()) return alert('Введите название');
    if (isNaN(parsedOffset)) return alert('Введите числовое смещение');
    onAdd({ name, offset: parsedOffset });
    setName('');
    setOffset('');
  };

  return (
    <form onSubmit={handleSubmit} className="controls">
      <input type="text" placeholder="Название" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" step="0.5" placeholder="Смещение GMT" value={offset} onChange={(e) => setOffset(e.target.value)} />
      <button type="submit">Добавить</button>
    </form>
  );
}
