// @ts-check
/** @type {import('react').FC<{}>} */
import React, { useState } from 'react';
import Button from './Button';
import CoinToss from './CoinToss';
import PhysicalCoinInput from './PhysicalCoinInput';
import HexagramResult from './HexagramResult';
import { getHexagramFromLines } from '../lib/iching';

export default function ConsultFlow() {
  /** @type {['question' | 'mode' | 'toss' | 'result', Function]} */
  const [step, setStep] = useState('question');
  const [question, setQuestion] = useState('');
  /** @type {['virtual' | 'physical' | null, Function]} */
  const [mode, setMode] = useState(null);
  /** @type {[any, Function]} */
  const [lines, setLines] = useState(null);

  const handleQuestionSubmit = () => {
    if (question.trim()) {
      setStep('mode');
    }
  };

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
    setStep('toss');
  };

  const handleVirtualComplete = (coinLines) => {
    setLines(coinLines);
    setStep('result');
  };

  const handlePhysicalComplete = (coinLines) => {
    setLines(coinLines);
    setStep('result');
  };

  const handleReset = () => {
    setStep('question');
    setQuestion('');
    setMode(null);
    setLines(null);
    // Clear coin toss localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('coinResults');
    }
  };

  const hexagram = lines ? getHexagramFromLines(lines) : null;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Step 1: Question */}
      {step === 'question' && (
        <div className="space-y-4">
          <div>
            <h2 className="subtitle">Your Question</h2>
            <p className="text-muted-text text-sm mb-3">
              Take a moment to think about your question. It should be sincere and specific.
            </p>
          </div>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="What is your question for the I Ching?"
            className="w-full p-3 bg-surface text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            rows={4}
          />
          <Button onClick={handleQuestionSubmit}>Continue</Button>
        </div>
      )}

      {/* Step 2: Mode Selection */}
      {step === 'mode' && (
        <div className="space-y-4">
          <div>
            <h2 className="subtitle">How will you consult?</h2>
            <p className="text-muted-text text-sm mb-4">
              Choose between virtual coins or input from physical coins
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleModeSelect('virtual')}
              className="flex-1 p-6 bg-surface border-2 border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all text-center"
            >
              <p className="font-semibold text-foreground mb-2">Virtual Coins</p>
              <p className="text-sm text-muted-text">Let the app toss 3 virtual coins 6 times</p>
            </button>
            <button
              onClick={() => handleModeSelect('physical')}
              className="flex-1 p-6 bg-surface border-2 border-border rounded-lg hover:border-accent hover:bg-accent/5 transition-all text-center"
            >
              <p className="font-semibold text-foreground mb-2">Physical Coins</p>
              <p className="text-sm text-muted-text">Input results from your own coins</p>
            </button>
          </div>
          <Button onClick={() => setStep('question')}>Back</Button>
        </div>
      )}

      {/* Step 3: Toss/Input */}
      {step === 'toss' && (
        <div className="space-y-4">
          {mode === 'virtual' && (
            <>
              <h2 className="subtitle">Virtual Coin Toss</h2>
              <CoinToss onComplete={handleVirtualComplete} />
            </>
          )}
          {mode === 'physical' && (
            <>
              <h2 className="subtitle">Enter Physical Coin Results</h2>
              <PhysicalCoinInput onComplete={handlePhysicalComplete} />
            </>
          )}
          <Button onClick={() => setStep('mode')}>Change Mode</Button>
        </div>
      )}

      {/* Step 4: Result */}
      {step === 'result' && lines && (
        <div className="space-y-6">
          <div>
            <h2 className="subtitle">Your Reading</h2>
            <p className="text-muted-text text-sm mb-4">Question: {question}</p>
          </div>
          {hexagram ? (
            <>
              <HexagramResult lines={lines} hexagram={hexagram} />
              <Button onClick={handleReset}>New Reading</Button>
            </>
          ) : (
            <div className="p-6 bg-accent/10 border border-accent rounded-lg text-center">
              <p className="text-foreground font-semibold mb-2">Hexagram not found</p>
              <p className="text-sm text-muted-text mb-4">
                The combination of lines did not map to a known hexagram. This is a data integrity issue.
              </p>
              <Button onClick={handleReset}>Try Again</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
