"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Player {
  id: number;
  elo: number;
  createdAt: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [apiKey, setApiKey] = useState("");
  const [leaderboard, setLeaderboard] = useState<Player[] | null>(null);
  const [error, setError] = useState("");

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (!token) {
      router.push("/login");
    } else {
      fetchApiKey();
    }
  }, []);

  const fetchApiKey = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/me`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setApiKey(res.data.apiKey);
    } catch (err) {
      setError("Failed to fetch API key");
    }
  };

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

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {apiKey && (
        <div className="mb-6">
          <p className="text-sm text-gray-600">Your API Key:</p>
          <div className="font-mono bg-white p-2 rounded border">{apiKey}</div>
        </div>
      )}

      <button
        onClick={fetchLeaderboard}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Fetch Leaderboard
      </button>

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
