'use client'
import { useState } from "react"
import Button from "./Button";

export default function CoinToss() {
    const [coinResults, setCoinResults] = useState([])
  
    const tossCoins = () => {
      const newResults = []
      for (let i = 0; i < 3; i++) {
        // Simulate coin toss (2 = tails, 3 = heads)
        const result = Math.floor(Math.random() * 2) + 2
        newResults.push(result)
      }
      console.log(newResults)
      setCoinResults(newResults)
    };
  
    return (
      <div>
        <Button onClick={tossCoins}>Toss Coins</Button>
        <p>{coinResults}</p>
      </div>
    )
}