import React from 'react'
import Dilution1 from './assets/diluicao-1.png'
import Dilution2 from './assets/diluicao-2.png'
import Dilution3 from './assets/diluicao-3.png'

import './sectionHowToUse.scss'

const SectionHowToUse = () => {
  return (
    <section className="section-how-to-use" id="como-usar">
      <div className="wrapper">
        <div className="how-use">
          <h2>Como usar?</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <p className="step-desc">
                Diluir de acordo com o grau de sujidade. Não recomendamos a
                utilização do produto puro
              </p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <p className="step-desc">
                Espalhar o produto e esfregar com o auxílio de uma vassoura
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <p className="step-desc">
                Deixar agir de 5 a 10 minutos tomando cuidado para não secar o
                produto
              </p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <p className="step-desc">
                Enxaguar com água em abundância até retirar todo o produto
              </p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <p className="step-desc">Repetir a operação se necessário</p>
            </div>
          </div>
        </div>
        <div className="dilution">
          <div className="dilution-steps">
            <h2>Diluição</h2>
            <div className="container">
              <div className="dilution-step">
                <p>Limpeza pesada até</p>
                <img src={Dilution1} alt="" />
                <div className="numbers">
                  <div className="number">01</div>
                  <div className="number">04</div>
                </div>
                <div className="liters">250ml/L</div>
              </div>
              <div className="dilution-step">
                <p>Limpeza média até</p>
                <img src={Dilution2} alt="" />
                <div className="numbers">
                  <div className="number">01</div>
                  <div className="number">06</div>
                </div>
                <div className="liters">166ml/L</div>
              </div>
              <div className="dilution-step">
                <p>Limpeza leve até</p>
                <img src={Dilution3} alt="" />
                <div className="numbers">
                  <div className="number">01</div>
                  <div className="number">10</div>
                </div>
                <div className="liters">100ml/L</div>
              </div>
            </div>
          </div>
          <div className="proportions-group">
            <p className="title">Proporção:</p>
            <div className="proportions">
              <div className="proportion">
                <div className="circle"></div> <p>produto</p>
              </div>
              <div className="proportion">
                <div className="circle"></div> <p>água</p>
              </div>
            </div>
          </div>
        </div>
        <div className="after-clean">
          <h2>O que fazer após a limpeza?</h2>
          <p>
            Após o término da limpeza, recomendamos que seja aplicado detergente
            neutro por toda a superfície, para que possíveis resíduos de ácidos
            sejam neutralizados e tenham suas ações interrompidas. Quando o
            ácido fica agindo sobre o piso, ele tende a penetrar pelos poros e
            atingir toda propriedade que está abaixo daquela
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionHowToUse
