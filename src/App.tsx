import Dino from './components/Dino';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Dino />
      <div className="Container">
        <label className="Label" htmlFor="name">Suscribete</label>
        <input className='Input' id='name' name="name" type="text" placeholder='Ingrese su nombre *' />

        <button className='Button'>Suscribirme</button>
      </div>

    </div>
  )
}

export default App
