import React, { useState } from 'react'
import Personaje1 from '../../public/img/Personaje1.jpg'
import Personaje2 from '../../public/img/Personaje2.jpg'
import Personaje3 from '../../public/img/Personaje3.jpg'
import Personaje4 from '../../public/img/Personaje4.jpg'

export const EresPrd = () => {
    const [brincos, setBrincos] = useState(0)
    const [isJumping, setJumping] = useState(false);
    const [personajes, setPersonajes] = useState([Personaje1])
    const Brincos100 = [Personaje1,Personaje2]
    const Brincos200 = [Personaje1,Personaje2,Personaje3]
    const Brincos300 = [Personaje1,Personaje2,Personaje3,Personaje4]

    const handleJump = () => {
        setJumping(true);
        setBrincos(brincos+1)
        if (brincos == 20){
            setPersonajes(Brincos100)
        } else if (brincos == 40){
            setPersonajes(Brincos200)
        } else if (brincos == 50){
            setPersonajes(Brincos300)
        } 

        // Después de medio segundo, vuelve a establecer el estado a falso
        setTimeout(() => {
        setJumping(false);
        }, 500);
    };

  return (
    <>
        <h3>Total de Brincos: {brincos}</h3>
        <div id='brincar' className={`box ${isJumping ? 'jump' : ''}`} onClick={handleJump}>
            {personajes.map(p => (
                <img src={p} alt='' />
            ))}
        </div>
        <div id='suelo'>PRD</div>
    </>
  )
}