'use client'
import { useEffect, useState } from 'react'
import Button from './Button'

export default function CoinToss() {
    const [coinResults, setCoinResults] = useState(() => {
        // Recuperar del localStorage si hay datos guardados
        if (typeof window !== 'undefined') {
            const storedResults = localStorage.getItem('coinResults')
            return storedResults ? JSON.parse(storedResults) : []
        }
        return []
    })

    useEffect(() => {
        if (coinResults.length === 6) {
            console.log('Coin Toss Results:', coinResults)
            localStorage.setItem('coinResults', JSON.stringify(coinResults)) // Guardar en localStorage
        }
    }, [coinResults])

    const tossCoins = () => {
        const newLine = Array.from({ length: 3 }, () => Math.floor(Math.random() * 2) + 2)
        setCoinResults(prev => [...prev, newLine])
    }

    return (
        <div className='flex flex-col items-center'>
            {coinResults.length < 6 && <Button onClick={tossCoins}>Toss Coins</Button>}
            <div className='flex flex-col-reverse mt-4'>
                {coinResults.map((line, index) => (
                    <p className='text-xs' key={index}>{line.join(', ')}</p>
                ))}
            </div>
        </div>
    )
}
