import React, { useState, useEffect } from 'react';
import WatchForm from './components/WatchForm';
import WatchList from './components/WatchList';

export default function App() {
  const [watches, setWatches] = useState([]);
  const [nextId, setNextId] = useState(1);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  const addWatch = ({ name, offset }) => {
    setWatches((prev) => [...prev, { id: nextId, name, offset }]);
    setNextId(nextId + 1);
  };

  const removeWatch = (id) => {
    setWatches((prev) => prev.filter((w) => w.id !== id));
  };

  return (
    <div className="app">
      <h1>Мировые часы</h1>
      <WatchForm onAdd={addWatch} />
      <WatchList watches={watches} currentTime={currentTime} onRemove={removeWatch} />
    </div>
  );
}
