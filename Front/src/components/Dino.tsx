import { useEffect, useRef } from 'react';

import '../styles/Dino.css';

let sueloX = 0;
let deltaTime: number | Date = 0;
let time = new Date();

const velEscenario = 1280/3;
const gameVel = 1;

function Dino() {
  const wall = useRef<null | HTMLParagraphElement>(null);
  const canvasRef = useRef<null | HTMLParagraphElement>(null);

  const calcularDesplazamiento = () => {
    return velEscenario * +deltaTime * gameVel;
  }

  const MoverSuelo = () => {
    sueloX += calcularDesplazamiento();

    if (canvasRef.current && wall.current) {
      canvasRef.current.style.left = -(sueloX % wall.current.clientWidth) + "px";
    }
  }

  useEffect(() => {
    const Loop = () => {
      deltaTime = (+new Date() - +time) / 1000;
      time = new Date();
      MoverSuelo();
    }

    function Init() {
      Loop();
    }

    const timeOut =  setInterval(Init, 1);

    return () => {
      clearInterval(timeOut);
    }
  }, [])

  return (
    <div ref={wall} className="ContainerDino">
      <div ref={canvasRef} className="suelo"></div>
      <div className="dino dinoCorriendo"></div>
    </div>
  )
}

export default Dino;
