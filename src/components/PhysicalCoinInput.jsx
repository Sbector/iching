import React, { useState } from 'react';
import Button from './Button';

export default function PhysicalCoinInput({ onComplete }) {
  /** @type {[any[], Function]} */
  const [lines, setLines] = useState([]);
  /** @type {[number, Function]} */
  const [currentRound, setCurrentRound] = useState(0);
  /** @type {[[number, number, number], Function]} */
  const [coins, setCoins] = useState([0, 0, 0]);

  const calculateLine = (coinResults) => {
    // Assumes 0 = not selected, 1 = heads (3), 2 = tails (2)
    const values = coinResults.map((c) => (c === 1 ? 3 : 2));
    const sum = values[0] + values[1] + values[2];
    if (sum === 6) return 6;
    if (sum === 7) return 9;
    if (sum === 8) return 8;
    if (sum === 9) return 9;
    return 8; // fallback
  };

  const getLineType = (sum) => {
    if (sum === 6) return 'Changing Yin (6)';
    if (sum === 7) return 'Yang (9)';
    if (sum === 8) return 'Yin (8)';
    if (sum === 9) return 'Changing Yang (9)';
    return '';
  };

  const handleCoinClick = (index) => {
    const newCoins = [...coins];
    newCoins[index] = ((newCoins[index] + 1) % 3);
    setCoins(newCoins);
  };

  const handleSubmitRound = () => {
    if (coins.includes(0)) {
      alert('Please select all 3 coins');
      return;
    }

    const lineValue = calculateLine(coins);
    setLines([...lines, lineValue]);
    setCoins([0, 0, 0]);
    setCurrentRound(currentRound + 1);
  };

  const handleComplete = () => {
    if (lines.length === 6) {
      onComplete(lines);
    }
  };

  const sum = coins.reduce((acc, c) => acc + (c === 1 ? 3 : c === 2 ? 2 : 0), 0);

  return (
    <div className="flex flex-col items-center gap-6 py-4">
      <div className="text-center">
        <h3 className="subtitle">Round {currentRound + 1} of 6</h3>
        <p className="text-muted-text text-sm">Physical Coins: Click each coin to toggle</p>
      </div>

      {/* Coin Selection */}
      <div className="flex gap-8 mb-4">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => handleCoinClick(i)}
            className={`w-16 h-16 rounded-full text-2xl font-bold transition-all flex items-center justify-center border-2 ${
              coins[i] === 0
                ? 'bg-surface border-border text-muted-text'
                : coins[i] === 1
                  ? 'bg-accent border-accent text-white'
                  : 'bg-button-hover border-button-hover text-white'
            }`}
            title={
              coins[i] === 0 ? 'Not selected' : coins[i] === 1 ? 'Heads (3)' : 'Tails (2)'
            }
          >
            {coins[i] === 0 ? '?' : coins[i] === 1 ? 'H' : 'T'}
          </button>
        ))}
      </div>

      {/* Sum Display */}
      {sum > 0 && (
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground">Sum: {sum}</p>
          <p className="text-sm text-accent">{getLineType(sum)}</p>
        </div>
      )}

      {/* Submit Round Button */}
      <Button onClick={handleSubmitRound}>Record Line {currentRound + 1}</Button>

      {/* Progress */}
      {lines.length > 0 && (
        <div className="w-full text-center">
          <p className="text-sm text-muted-text mb-2">Lines recorded: {lines.length}/6</p>
          <div className="flex justify-center gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold ${
                  i < lines.length
                    ? 'bg-accent text-white'
                    : 'bg-surface text-muted-text border border-border'
                }`}
              >
                {i < lines.length ? lines[i] : i + 1}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Complete Button */}
      {lines.length === 6 && (
        <Button onClick={handleComplete}>Get Hexagram Result</Button>
      )}
    </div>
  );
}
