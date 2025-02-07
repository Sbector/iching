'use client'
import { useEffect, useState } from 'react'
import Button from './Button'

export default function CoinToss() {

    const [coinResults, setCoinResults] = useState([])

    useEffect(() => {
        console.log(coinResults)
    }, [coinResults])

    const tossCoins = () => {
        const newLine = []
        for (let i = 0; i < 3; i++) {
            const result = Math.floor(Math.random() * 2) + 2
            newLine.push(result)
        }
        setCoinResults([...coinResults, newLine])
    }

    return (
        <div className='flex'>
            {coinResults.length < 6 && <Button onClick={tossCoins}>Toss Coins</Button>}
                <div className='flex flex-col-reverse'>
                    {coinResults.map((line, index) => {
                        return (
                            <p className='text-xs' key={index}>{line}</p>
                        )
                    })}
                </div>
        </div>
    )
}