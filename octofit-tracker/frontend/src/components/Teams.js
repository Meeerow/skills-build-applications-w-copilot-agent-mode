import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Teams() {
  const [teams, setTeams] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('http://expert-goggles-9p9g9q64wr5fxgqq-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container mt-4">
      <h1 className="display-5">Teams</h1>
      <ul className="list-group">
        {teams.map(team => (
          <li key={team._id} className="list-group-item">{team.name}</li>
        ))}
      </ul>
      <Button variant="primary" className="mt-3" onClick={handleShow}>Add Team</Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="teamName" className="form-label">Team Name</label>
              <input type="text" className="form-control" id="teamName" placeholder="Enter team name" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary">Save Team</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Teams;