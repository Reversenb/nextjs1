"use client"
import { useState,useEffect } from "react"
import Card from "../components/Card"
export default function Page() {
    const [fruit, setFruit] = useState('apple');
    const toApple = () => {
        setFruit('Apple')
    }
    const toBanana = () => {
        setFruit('Banana')
    }
   
    useEffect(() => {
        document.title = `${fruit} Page`
    })
    return (
        <div>
            <h1 className="text-3xl text-center items-center"> {fruit} </h1>
            <button onClick={toBanana} className="px-4 py-2 m-2 bg-blue-500 text-white rounded" >UP</button>
            <button onClick={toApple} className="px-4 py-2 m-2 bg-red-500 text-white rounded" >DOWN</button>
            <Card src="/cr7.jpg" title="Player 1" />
            <Card src="/lamine.jpg" title="Player 2" />
            <Card src="/anty.jpg" title="Player 3" />
        </div>
    )
}