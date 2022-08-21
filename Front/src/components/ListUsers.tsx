import { useState, useEffect } from 'react'

type ListUsersProps = {
  users: User[]
}

type User = {
  id: number,
  name: string
}

const includeString = (str: string, search: string) => {
  str = String(str).toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  search = String(search).toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

  return str.includes(search)
}

const ListUsers = ({ users }: ListUsersProps) => {
  const [usersList, setUsersList] = useState<User[]>([])
  const [textInput, setTextInput] = useState('')

  useEffect(() => {
    setUsersList(users)
  }, [users])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTextInput(value)

    const filteredUsers = users.filter(user => includeString(user.name, value))
    setUsersList(filteredUsers)
  }

  if (!usersList.length || usersList.length === 0) {
    return (
      <>
        <h2 className='Titulo' >Mejores Usuarios</h2>
        <input value={textInput} onChange={handleChange} style={{ marginBottom: '15px' }} className="Input" type="text" placeholder="Buscar" />
        <h1 className='Error'>Usuario no encontrado</h1>
      </>
    )
  }

  return (
    <>
      <h2 className='Titulo' >Mejores Usuarios</h2>
      <input value={textInput} onChange={handleChange} style={{ marginBottom: '15px' }} className="Input" type="text" placeholder="Buscar" />
      <div className='Usuarios'>
        {
          usersList.map((user: User) => (
            <div className='Usuario' key={user.id}>
              <strong>{user.name}</strong>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ListUsers;
