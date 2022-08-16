import { useState } from 'react'

type FormProps = {
    submitUser: (user: string) => void;
}

const Form = ({ submitUser }: FormProps) => {
  const [error, setError] = useState('');
  const [user, setUser] = useState('');

  const verifyUser = (name: string) => {
    if (!name.match(/^[A-ZÀ-ÿ\u00f1\u00d1 ]+$/i) && name !== '') {
      setError('Oops, no parece un nombre válido');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error !== '') setError('');
    const { value } = e.target;

    verifyUser(value);
    setUser(value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setError('');
    e.preventDefault();

    verifyUser(user);
    if (!user.trim()) {
      setError('Por favor, digite su nombre');
      return;
    }

    if (error === '') {
      submitUser(user);
      setUser('');
    }
  }

  return (
    <form className="Container" onSubmit={handleSubmit}>

      <label className="Label" htmlFor="name">Suscríbete</label>
      <input value={user} onChange={handleChange} className='Input' id='name' name="name" type="text" placeholder='Ingrese su nombre *' />
      <p className='Error'>{error}</p>

      <button type='submit' className='Button'>Suscribirme</button>

    </form>
  )
}

export default Form;
