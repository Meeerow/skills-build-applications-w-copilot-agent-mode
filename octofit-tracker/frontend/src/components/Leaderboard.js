import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('http://expert-goggles-9p9g9q64wr5fxgqq-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="display-5">Leaderboard</h1>
      <div className="row">
        {leaderboard.map(entry => (
          <div className="col-md-4" key={entry._id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{entry.user.username}</Card.Title>
                <Card.Text>Score: {entry.score}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;