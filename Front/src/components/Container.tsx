const Container = (
  { children, setShowForm }: { children: React.ReactNode, setShowForm: (showForm: boolean) => void }
) => {
  return (
    <div className='Container'>
      {children}
    </div>
  )
}

export default Container;
