"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/hooks/useAuth";

interface Player {
  id: number;
  elo: number;
  createdAt: string;
}

export default function DashboardPage() {
  const { user, token, isLoading, logout } = useAuth();
  const [leaderboard, setLeaderboard] = useState<Player[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // 若登入後自動載入排行榜，也可以呼叫 fetchLeaderboard() 這邊
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/leaderboard`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLeaderboard(res.data);
    } catch (err) {
      setError("Failed to fetch leaderboard");
    }
  };

  if (isLoading) return <p className="p-8">Loading...</p>;
  if (!user) return <p className="p-8">Not logged in</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.email}</h1>

      <div className="mb-6">
        <p className="text-sm text-gray-600">Your API Key:</p>
        <div className="font-mono bg-white p-2 rounded border">
          {user.apiKey}
        </div>
      </div>

      <button
        onClick={fetchLeaderboard}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Fetch Leaderboard
      </button>

      <button
        onClick={logout}
        className="ml-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition"
      >
        Logout
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {leaderboard && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Leaderboard</h2>
          <ul className="bg-white p-4 rounded shadow space-y-2">
            {leaderboard.map((player) => (
              <li key={player.id} className="flex justify-between text-sm">
                <span>ID: {player.id}</span>
                <span>ELO: {player.elo}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
