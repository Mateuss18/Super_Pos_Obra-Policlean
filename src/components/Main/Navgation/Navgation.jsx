import React from 'react'
import './navigation.scss'

const Navgation = () => {
  return (
    <nav>
      <div className="wrapper">
        <ul className="naviagation">
          <li className="btn-a">
            <a href="#o-que-e-?">O que é?</a>
          </li>
          <li className="btn-a">
            <a href="/beneficios-do-super-pós-obra?">
              Benefícios do Super Pós Obra?
            </a>
          </li>
          <li className="btn-a">
            <a href="/">Como usar?</a>
          </li>
          <li className="btn-a">
            <a href="/">Descrição</a>
          </li>
          <li className="btn-a">
            <a href="/">Quem é a Policlean Oirad?</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navgation
