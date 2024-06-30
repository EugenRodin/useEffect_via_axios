import { useEffect, useState } from 'react'
import { UserInterface } from './types/Users.interface.ts'
import { fetchData } from './utils/api.tsx'

const App = () => {

  const [users, setUsers] = useState<UserInterface[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchDataAndHandleLoading = async () => {
      try {
        const data = await fetchData()
        setUsers(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchDataAndHandleLoading()

    return () => {
      
    }
  }, [])


  return <div>
    <h1>Render of User list</h1>
    {isLoading && <h2>Loading...</h2>}
    {error && <h2>{error}</h2>}
    <ul>
      {users.map((user: UserInterface) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>
}

export default App