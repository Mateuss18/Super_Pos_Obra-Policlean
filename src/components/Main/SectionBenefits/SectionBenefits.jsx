import React from 'react'
import { FaPlay } from 'react-icons/fa'
import './sectionBenefits.scss'

const SectionBenefits = () => {
  return (
    <section className="section-benefits" id="beneficios">
      <div className="wrapper">
        <div className="container">
          <h2>Benefícios do pós obra:</h2>
          <ul className="benefits">
            <li className="benefit">
              <div className="icon">
                <FaPlay color="#83BDD6" size={'37px'} />
              </div>
              <p>
                Remove os resíduos de obra com eficácia e sem agredir as
                superfícies;
              </p>
            </li>
            <li className="benefit">
              <div className="icon">
                <FaPlay color="#83BDD6" size={'37px'} />
              </div>
              <p>
                Ideal em ambientes com excesso de concreto, cimento, reboco,
                argamassa, cal, rejuntes, gesso e terra em obras;
              </p>
            </li>
            <li className="benefit">
              <div className="icon">
                <FaPlay color="#83BDD6" size={'37px'} />
              </div>
              <p>
                Remove respingos de tintas de base água recentes em pisos não
                porosos;
              </p>
            </li>
            <li className="benefit">
              <div className="icon">
                <FaPlay color="#83BDD6" size={'37px'} />
              </div>
              <p>
                Muito versátil: Ótimo para quem presta serviços (uso
                profissional). Excelente para residências (uso doméstico);
              </p>
            </li>
            <li className="benefit">
              <div className="icon">
                <FaPlay color="#83BDD6" size={'37px'} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SectionBenefits
