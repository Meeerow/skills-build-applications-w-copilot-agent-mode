import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('http://expert-goggles-9p9g9q64wr5fxgqq-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="display-5">Workouts</h1>
      <div className="row">
        {workouts.map(workout => (
          <div className="col-md-4" key={workout._id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{workout.name}</Card.Title>
                <Card.Text>{workout.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Workouts;