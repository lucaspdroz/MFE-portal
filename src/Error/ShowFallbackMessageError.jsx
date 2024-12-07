import React from 'react'
import img from '../Assets/sad.png'
import './fallback.css'

export default function ShowFallbackMessageError() {
  return (
    <div className='fallback-error'>
      <h3>Ooopsie. Perdemos nosso componente!</h3>
      <p>Você deve ter esquecido de rodar o projeto ou  servir os estáticos </p>
      <img src={img} alt="deu ruim" />
    </div>
  )
}
