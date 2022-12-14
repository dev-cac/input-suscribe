import { useState, useEffect } from 'react'

import Dino from './components/Dino';
import Form from './components/Form';
import ListUsers from './components/ListUsers';
import Container from './components/Container';

import './styles/App.css';

const url = import.meta.env.VITE_SERVER_DB;

function App() {
  const [showForm, setShowForm] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [showForm])

  const submitUser = (user: string) => {
    fetch(`${url}/user/${user}`, {
      method: 'POST',
    }).then(() => {
      setShowForm(false);
    })
  }

  return (
    <div className="App">
      <Dino />
      <Container showForm={showForm} setShowForm={setShowForm}>
        {showForm ? <Form submitUser={submitUser} /> : <ListUsers users={users} />}
      </Container>
    </div>
  )
}

export default App
