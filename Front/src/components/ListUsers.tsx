type ListUsersProps = {
  users: User[]
}

type User = {
  id: number,
  name: string
}

const ListUsers = ({ users }: ListUsersProps) => {
  return (
    <div className='Container'>
      <input style={{ marginBottom: '15px' }} className="Input" type="text" placeholder="Buscar" />
      <div className='Usuarios'>
        {
          users.map((user: User) => (
            <div className='Usuario' key={user.id}>
              <strong>{user.name}</strong>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ListUsers;
