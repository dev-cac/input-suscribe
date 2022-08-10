import { useState } from 'react'

import './App.css'

function App() {
  return (
    <div className="App">

      <div className="Container">
        <label className="Label" htmlFor="name">Suscribete</label>
        <input className='Input' id='name' name="name" type="text" placeholder='Ingrese su nombre *' />

        <button className='Button'>Suscribirme</button>
      </div>

    </div>
  )
}

export default App
