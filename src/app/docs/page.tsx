export default function DocsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-sm text-gray-800">
      <h1 className="text-3xl font-bold mb-8">Matchmaking API Docs</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Authentication</h2>
        <p>All API requests require a valid JWT token in the header:</p>
        <pre className="bg-gray-100 p-2 mt-2 rounded">
          Authorization: Bearer your-jwt-token
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Register Developer</h2>
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
          POST /api/register Body:
          {`{
  "email": "dev@example.com",
  "password": "yourPassword"
}`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Login</h2>
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
          POST /api/login Body:
          {`{
  "email": "dev@example.com",
  "password": "yourPassword"
}`}
          Response:
          {`{
  "token": "your-jwt-token"
}`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Get Developer Info</h2>
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
          GET /api/me Header: Authorization: Bearer your-jwt-token
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Create Player</h2>
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
          POST /api/players Body:
          {`{
  "elo": 1200
}`}
          Response:
          {`{
  "playerId": 3,
  "elo": 1200
}`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Join Matchmaking</h2>
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
          POST /api/matchmaking/join Body:
          {`{
  "elo": 1200
}`}
          Response:
          {`{
  "matchFound": true,
  "roomCode": "abc123",
  "matchId": 1,
  "players": [1, 2]
}`}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Report Match Result</h2>
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
          POST /api/match/result Body:
          {`{
  "matchId": 1,
  "winnerId": 1
}`}
          Response:
          {`{
  "message": "Match result recorded",
  "newElo": {
    "1": 1184,
    "2": 1216
  }
}`}
        </pre>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Get Leaderboard</h2>
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
          GET /api/leaderboard Response:
          {`[
  { "id": 1, "elo": 1400 },
  { "id": 2, "elo": 1200 }
]`}
        </pre>
      </section>
    </div>
  );
}
