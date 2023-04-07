import React from 'react'
import selo_1 from './assets/selo_50_litros.png'
import selo_2 from './assets/selo_preço_litro.png'
import asideImages from './assets/aside_images.png'
import { BiMinus, BiPlus, BiLock } from 'react-icons/bi'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import './product.scss'
import { TbTruckDelivery } from 'react-icons/tb'

const Product = () => {
  return (
    <div className="product-section">
      <div className="wrapper">
        <div className="breadcrumb">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>|</li>
            <li>
              <a href="">Linha Profissional</a>
            </li>
            <li>|</li>
            <li>
              <a href="">Limpeza Pós Obra</a>
            </li>
            <li>|</li>
            <li>
              <a href="">Super Pós Obra 5L - Remove Sujidades</a>
            </li>
          </ul>
        </div>
        <div className="containers">
          <div className="product-images">
            <div className="column">
              <img src={asideImages} alt="" />
            </div>
            <div className="main-image">
              {/* <img
                className="product"
                src={productImage}
                alt="Imagem do produto"
              /> */}
              <img
                className="stamp"
                src={selo_1}
                alt="Selo Rende até 50 litros"
              />
              <img
                className="stamp"
                src={selo_2}
                alt="Selo 1,56 reais por litro"
              />
              <span className="message">
                *Valor por litro diluído considerando diluição para limpeza leve
              </span>
            </div>
          </div>
          <div className="product-info">
            <div className="desc">
              <h1 className="product-name">
                Super pós obra 5L - Remove sujidades
              </h1>
              <p className="product-code">REF: 14543183</p>
              <div className="product-stars">
                <AiFillStar color="#F2CB0B" size={'24px'} />
                <AiFillStar color="#F2CB0B" size={'24px'} />
                <AiFillStar color="#F2CB0B" size={'24px'} />
                <AiFillStar color="#F2CB0B" size={'24px'} />
                <AiOutlineStar color="#F2CB0B" size={'24px'} />
              </div>
              <p className="rate-now">
                <b>(45) Avaliações.</b> Avalie agora!
              </p>
            </div>

            <div className="divisor"></div>

            <div className="buy">
              <div className="product-price">R$75,00</div>
              <p className="pay-in">
                em até <b>12x</b> de <b>R$ 7,19</b>
              </p>
              <div className="buy-container">
                <div className="amount">
                  <BiMinus size={'18px'} />
                  <span>1</span>
                  <BiPlus size={'18px'} />
                </div>
                <button className="buy-btn btn">Comprar</button>
              </div>
              <p className="safe-buy">
                <BiLock size={'24px'} />
                Aqui sua compra é 100% segura, compre com traquilidade.
              </p>
              <button className="resale-btn btn">Revenda e lucre</button>
            </div>

            <div className="divisor"></div>

            <div className="shipping">
              <div className="delivery">
                <TbTruckDelivery size={'35px'} color="#a7a7a7" />
                <b>Frete e prazo de entrega</b>
              </div>
              <form className="shipping-input" action="">
                <input type="number" placeholder="Insira o CEP" />
                <button className="btn submit" type="submit">
                  Calcular
                </button>
              </form>
              <table cellSpacing="0" cellPadding="0">
                <thead>
                  <tr>
                    <th>Frete</th>
                    <th>Valor</th>
                    <th>Prazo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="upper">Correiros pac</td>
                    <td>R$ 22,49</td>
                    <td>5 a 6 dias úteis.</td>
                  </tr>
                  <tr>
                    <td className="upper">Correiros sedex</td>
                    <td>R$ 31,72</td>
                    <td>2 a 3 dias úteis.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
