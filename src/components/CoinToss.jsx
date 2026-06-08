import { useEffect, useState } from 'react';
import Button from './Button';

export default function CoinToss({ onComplete }) {
  /** @type {[any[], Function]} */
  const [coinResults, setCoinResults] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedResults = localStorage.getItem('coinResults');
      return storedResults ? JSON.parse(storedResults) : [];
    }
    return [];
  });

  useEffect(() => {
    if (coinResults.length === 6) {
      console.log('Coin Toss Results:', coinResults);
      localStorage.setItem('coinResults', JSON.stringify(coinResults));
      if (onComplete) {
        onComplete(coinResults);
      }
    }
  }, [coinResults, onComplete]);

  const calculateLine = () => {
    const values = [
      Math.floor(Math.random() * 2) + 2,
      Math.floor(Math.random() * 2) + 2,
      Math.floor(Math.random() * 2) + 2,
    ];
    const sum = values[0] + values[1] + values[2];

    if (sum === 6) return 6;
    if (sum === 7) return 7;
    if (sum === 8) return 8;
    if (sum === 9) return 9;
    return 8;
  };

  const tossCoins = () => {
    const newLine = calculateLine();
    setCoinResults((prev) => [...prev, newLine]);
  };

  const handleReset = () => {
    setCoinResults([]);
    localStorage.removeItem('coinResults');
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      {coinResults.length < 6 && <Button onClick={tossCoins}>Toss Coins</Button>}
      <div className='flex flex-col-reverse mt-4 gap-2 text-center'>
        {coinResults.map((lineValue, index) => (
          <div key={index} className='p-2 bg-surface rounded border border-border'>
            <p className='text-sm font-semibold text-foreground'>Line {index + 1}</p>
            <p className='text-xs text-muted-text'>Value: {lineValue}</p>
          </div>
        ))}
      </div>
      {coinResults.length > 0 && coinResults.length < 6 && (
        <p className='text-sm text-muted-text'>Progress: {coinResults.length}/6</p>
      )}
      {coinResults.length > 0 && (
        <Button onClick={handleReset}>Reset</Button>
      )}
    </div>
  );
}
