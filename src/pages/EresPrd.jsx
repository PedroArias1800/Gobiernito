import React, { useState } from 'react'
import Personaje1 from '../../public/img/Personaje1.jpg'

export const EresPrd = () => {
    const [brincos, setBrincos] = useState(0)
    const [isJumping, setJumping] = useState(false);

    const handleJump = () => {
        setJumping(true);
        setBrincos(brincos+1)

        // Después de medio segundo, vuelve a establecer el estado a falso
        setTimeout(() => {
        setJumping(false);
        }, 500);
    };

  return (
    <>
        <h3>Total de Brincos: {brincos}</h3>
        <div id='brincar' className={`box ${isJumping ? 'jump' : ''}`} onClick={handleJump}>
            <img src={Personaje1} alt='' />
        </div>
        <div id='suelo'>PRD</div>
    </>
  )
}