import React from 'react';
import {
  getHexagramFromLines,
  getChangingHexagram,
  getChangingLinePositions,
} from '../lib/iching';

export default function HexagramResult({ lines, hexagram }) {
  if (!hexagram) {
    return <div className="text-center text-accent">Hexagram not found</div>;
  }

  const changingPositions = getChangingLinePositions(lines);
  const hasChangingLines = changingPositions.length > 0;
  const changingHexagram = hasChangingLines ? getChangingHexagram(lines) : null;

  const renderHexagramVisual = (hex) => {
    if (!hex) return null;
    return (
      <div className="flex flex-col items-center">
        <p className="text-xs text-muted-text mb-1">#{hex.number}</p>
        <div className="text-6xl mb-2">{hex.unicodeSymbol}</div>
        <div className="text-center">
          <p className="subtitle">{hex.name}</p>
          <p className="text-sm text-muted-text">{hex.chineseName}</p>
        </div>
      </div>
    );
  };

  const renderLines = () => {
    return (
      <div className="space-y-3">
        <h3 className="subtitle mb-4">The Reading (6 Lines, bottom to top)</h3>
        <div className="flex flex-col-reverse gap-0 bg-surface rounded-lg p-6 border border-border">
          {lines.map((lineValue, idx) => {
            const linePos = idx + 1;
            const isChanging = changingPositions.includes(linePos);
            const symbol = lineValue === 9 || lineValue === 7 ? '━━━━━━' : '━ ━ ━ ━';
            const lineType = lineValue === 6 ? 'changing yin' : lineValue === 7 ? 'yang' : lineValue === 8 ? 'yin' : 'changing yang';

            return (
              <div
                key={idx}
                className={`flex items-center justify-between py-2 px-3 border-l-4 transition-colors ${
                  isChanging 
                    ? 'border-l-accent bg-accent/5' 
                    : 'border-l-border'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-xl ${isChanging ? 'text-accent font-bold' : 'text-foreground'}`}>
                    {symbol}
                  </span>
                  <div className="text-sm">
                    <p className={`font-semibold ${isChanging ? 'text-accent' : 'text-foreground'}`}>
                      Line {linePos}
                    </p>
                    <p className="text-xs text-muted-text">{lineType}</p>
                  </div>
                </div>
                {isChanging && (
                  <span className="text-accent text-xs font-bold px-2 py-1 bg-accent/10 rounded">
                    CHANGES
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main Hexagram */}
      <div className="text-center mb-8 p-4 bg-surface rounded-lg border border-border">
        {renderHexagramVisual(hexagram)}
        
        {hexagram.judgment && (
          <div className="mt-4 text-sm text-left">
            <p className="font-semibold text-foreground mb-2">Judgment:</p>
            <p className="text-muted-text italic">{hexagram.judgment}</p>
          </div>
        )}
      </div>

      {/* Lines Display */}
      <div className="mb-6">
        <p className="subtitle mb-3">Lines (bottom to top):</p>
        {renderLines()}
      </div>

      {/* Changing Lines Info */}
      {hasChangingLines && (
        <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg">
          <p className="subtitle mb-2 text-accent">Changing Lines</p>
          <p className="text-sm text-foreground mb-3">
            Positions: {changingPositions.join(', ')}
          </p>

          {/* Resulting Hexagram */}
          {changingHexagram && (
            <div className="mt-4">
              <p className="font-semibold text-foreground mb-3">Resulting Hexagram:</p>
              <a
                href={`/hexagrams/${changingHexagram.number}`}
                className="block p-4 bg-background rounded-lg border border-border hover:border-accent transition-colors cursor-pointer group"
                title={`View ${changingHexagram.name} (${changingHexagram.chineseName})`}
              >
                {renderHexagramVisual(changingHexagram)}
                <p className="text-center text-xs text-muted-text mt-2 group-hover:text-accent transition-colors">
                  View full hexagram →
                </p>
              </a>
            </div>
          )}
        </div>
      )}

      {/* Triagrams Info */}
      <div className="text-sm text-muted-text">
        <p>
          <span className="font-semibold">Upper Trigram:</span> {hexagram.upperTrigram}
        </p>
        <p>
          <span className="font-semibold">Lower Trigram:</span> {hexagram.lowerTrigram}
        </p>
      </div>
    </div>
  );
}
