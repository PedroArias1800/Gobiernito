import React, { useState } from 'react'
import Personaje1 from '../../public/img/Personaje1.jpg'

export const EresPrd = () => {
    const [brincos, setBrincos] = useState(0)

    const brincar = () => {
        setBrincos(brincos+1)
    }

  return (
    <>
        <div id='brincar' onClick={brincar}>
            <img src={Personaje1} alt='' />
        </div>
        <h3>Total de Brincos: {brincos}</h3>
    </>
  )
}