import React from 'react'
import BootsImg from './assets/boots.png'
import GlassImg from './assets/glass.png'
import GlovesImg from './assets/gloves.png'
import LuvasImg from './assets/luva.png'
import MaskImg from './assets/mask.png'
import './sectionDescription.scss'

const SectionDescription = () => {
  return (
    <section className="section-description" id="descricao">
      <div className="wrapper">
        <div className="description">
          <h2>Descrição</h2>
          <ul>
            <li>Embalagem: 1 garrafão de 5 litros</li>
            <li>Produto concentrado: 1 litro rende até 10 litros</li>
            <li>Produto registrado na ANVISA</li>
          </ul>
        </div>
        <div className="precautions-container">
          <div className="aside-image">
            <img src={LuvasImg} alt="Imagem de luvas de enfermagem" />
            <div className="circle"></div>
          </div>
          <div className="precautions">
            <h2>Precauções</h2>
            <p>
              Para sua segurança, é necessário o uso de EPI's para manusear o
              produto. Por se tratar de um produto à base de ácido, recomendamos
              uso de luvas de proteção, botas ou sapatos fechados, óculos e
              máscara. Lave as mãos cuidadosamente após o manuseio. Em caso de
              contato com a pele ou olhos lave cuidadosamente com água corrente
              durante vários minutos.
            </p>
            <div className="precautions-images">
              <img src={GlovesImg} alt="Icone luvas de proteção" />
              <img src={BootsImg} alt="Icone botas de proteção" />
              <img src={GlassImg} alt="Icone oculos de proteção" />
              <img src={MaskImg} alt="Icone mascara de proteção" />
            </div>
            <p>
              Conserve o produto fora do alcance de crianças e animais
              domésticos. Produto não testado em animais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionDescription
