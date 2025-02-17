"use client"
import React, { useEffect, useState } from "react"

interface Player {
    id: number
    name: string
    position: string
    nationality: string
    photo: string
}

const App: React.FC = () => {
    const [players, setPlayers] = useState<Player[]>([])
    const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const url = "https://v3.football.api-sports.io/players?team=541&season=2023"
        const options = {
            method: "GET",
            headers: {
                "x-apisports-key": "4ff79571b9e1fa5da6832fd2a1cb38fc", // เปลี่ยนเป็น API Key ของคุณ
            },
        }

        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                setPlayers(
                    data.response.map((player: any) => ({
                        id: player.player.id,
                        name: player.player.name,
                        position: player.statistics[0].games.position,
                        nationality: player.player.nationality,
                        photo: player.player.photo,
                    }))
                )
                setLoading(false)
            })
            .catch(() => {
                setError("Failed to fetch players.")
                setLoading(false)
            })
    }, [])

    const openPopup = (player: Player) => {
        setSelectedPlayer(player)
    }

    const closePopup = () => {
        setSelectedPlayer(null)
    }

    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <h1 className="text-center text-4xl font-bold py-8">Real Madrid Players</h1>
            {loading && <div className="text-center">Loading...</div>}
            {error && <div className="text-center text-red-500">{error}</div>}
            {!loading && !error && players.length === 0 && (
                <div className="text-center">No players found.</div>
            )}
            {!loading && !error && players.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
                    {players.map((player) => (
                        <div
                            key={player.id}
                            className="bg-white text-black rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-200"
                        >
                            <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                                <img
                                    src={player.photo}
                                    alt={player.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="font-bold text-lg">{player.name}</h3>
                                <p className="text-sm text-gray-600">{player.position}</p>
                                <button
                                    onClick={() => openPopup(player)}
                                    className="mt-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
                                >
                                    See More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {selectedPlayer && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white text-black rounded-lg shadow-lg p-6 max-w-md w-full relative">
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
                        >
                            ✕
                        </button>
                        <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                            <img
                                src={selectedPlayer.photo}
                                alt={selectedPlayer.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h2 className="text-2xl font-bold mt-4">{selectedPlayer.name}</h2>
                        <p className="text-sm text-gray-700 mt-2">
                            Position: {selectedPlayer.position}
                        </p>
                        <p className="text-sm text-gray-700 mt-2">
                            Nationality: {selectedPlayer.nationality}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App
