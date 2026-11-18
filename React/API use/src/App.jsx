import './App.css'
import { useState, useEffect } from 'react'

const App = () => {
  const [users, setUsers] = useState([])
  const [skip, setSkip] = useState(0)

  useEffect(() => {
    fetch(`https://dummyjson.com/users?limit=5&skip=${skip}`)
      .then(response => response.json())
      .then(data => setUsers(data.users))
  }, [skip])

  return (
    <>
      <h1>User List</h1>
      <ol>
        {users.map(user => (
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ol>

      <button onClick={() => setSkip(currentSkip => Math.max(0, currentSkip - 5))}
        disabled={skip === 0}>
        Previous
      </button>
      
      <button onClick={() => setSkip(currentSkip => currentSkip + 5)}>
        Next
      </button>
    </>
  )
}

export default App;