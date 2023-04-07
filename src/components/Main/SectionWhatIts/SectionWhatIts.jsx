import React from 'react'
import Product from './assets/mockup-com-capa.png'
import CleaningImg from './assets/cleaning.png'
import FloorImg from './assets/floor.png'
import WaterImg from './assets/water.png'
import './sectionWhatIts.scss'

const SectionWhatIts = () => {
  return (
    <section className="section-what-its" id="o-que-e">
      <div className="wrapper">
        <div>
          <div className="container-infos">
            <div className="info">
              <h2>O que é?</h2>
              <p>Detergente desincrustante pós obra.</p>
              <p>
                Indicado para limpeza pesada das sujidades do pós-obra,
                principalmente de resíduos como: excesso de rejunte, argamassa,
                cimento, gesso, terra e respingos de tinta*.
              </p>
              <small>
                *Somente respingos recentes de tintas à base de água
              </small>
            </div>
            <div className="info">
              <h2>Indicação de uso</h2>
              <p className="pad-space">
                Ideal para uso em superfícies laváveis e em pisos de
                porcelanato, cerâmicos, cotto/lajotas, cimentícios, granito,
                granilite, pastilhas, azulejos, antiderrapantes e pedras
                porosas, equipamentos como betoneiras e também materiais usados
                em uma reforma ou
              </p>
            </div>
            <div className="info">
              <h2>Tipos de superfícies que podem ser tratadas:</h2>
              <p>
                Devido a versatilidade do produto, ele pode ser utilizado em
                todo tipo de piso lavável. Para pisos que possuem acabamento com
                brilho, o ideal é utilizar a diluição de limpeza leve e aplicar
                em pequenas partes por vez, para que o produto não seque sobre o
              </p>
            </div>
          </div>
          <div className="middle-image">
            <img src={Product} alt="Imagem do produto" />
          </div>
        </div>
        <div className="features">
          <div className="feature">
            <img src={FloorImg} alt="Imagem de um piso limpo" />
            <p>
              <b>Eficaz na limpeza de pisos cerâmicos, pedras e porcelanatos</b>
            </p>
          </div>
          <div className="feature">
            <img src={CleaningImg} alt="Limpeza de residuos" />
            <p>
              <b>Remove resíduos deixados ao término da obra</b>
            </p>
          </div>
          <div className="feature">
            <img src={WaterImg} alt="Imagem de uma gota de água" />
            <p>
              <b>5 litros (concentrado)</b>
              <span>rende até 50 litros</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWhatIts
