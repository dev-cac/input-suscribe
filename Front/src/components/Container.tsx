type Props = {
  children: React.ReactNode,
  showForm: boolean,
  setShowForm: (showForm: boolean) => void
}

const Container = ({ children, showForm, setShowForm }: Props) => {
  const handleClick = () => {
    setShowForm(!showForm);
  }

  return (
    <div className='Container'>
      <div onClick={handleClick} className="Menu">
        <img src={ !showForm ? "/vite.svg" : "/menu.svg" } alt="Logo" />
      </div>
      {children}
    </div>
  )
}

export default Container;
