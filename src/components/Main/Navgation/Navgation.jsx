import React from 'react'
import './navigation.scss'

const Navgation = () => {
  return (
    <nav>
      <div className="wrapper">
        <ul className="naviagation">
          <li className="btn-a">
            <a href="#o-que-e">O que é?</a>
          </li>
          <li className="btn-a">
            <a href="#beneficios">Benefícios do Super Pós Obra?</a>
          </li>
          <li className="btn-a">
            <a href="#como-usar">Como usar?</a>
          </li>
          <li className="btn-a">
            <a href="#descricao">Descrição</a>
          </li>
          <li className="btn-a">
            <a href="#quem-e-a-policlean-oirad">Quem é a Policlean Oirad?</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navgation
