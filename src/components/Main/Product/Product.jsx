import React from 'react'

const Product = () => {
  return (
    <div className="product-section">
      <div className="wrapper">
        <div className="breadcrumb">
          <ul>
            <li>
              <a href="">Homse</a>
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
        <div className="container">
          <div className="product-images">
            <div className="column">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <div className="arrows">
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
            </div>
            <div className="main-image">
              <img src="" alt="" />
            </div>
          </div>
          <div className="product-info">
            <h1 className="product-name">
              Super pós obra 5L - Remove sujidades
            </h1>
            <p className="product-code">REF: 14543183</p>
            <div className="product-stars"></div>
            <p className="rate-now">(45) Avaliações. Avalie agora!</p>

            <div className="divisor"></div>

            <div className="product-price">R$75,00</div>
            <p className="pay-in">
              em até <b>12x</b> de <b>R$ 7,19</b>{' '}
            </p>
            <div className="buy-container">
              <div className="amount">
                <span>1</span>
              </div>
              <button className="buy btn">Comprar</button>
            </div>
          </div>

          <p className="safe-buy">
            Aqui sua compra é 100% segura, compre com traquilidade
          </p>
          <button className="resale btn">Revenda e lucre</button>

          <div className="divisor"></div>

          <div className="shipping">
            <b>Frete e prazo de entrega</b>
            <form className="shipping-input" action="">
              <input type="number" />
              <button className="btn submit" type="submit">
                Calcular
              </button>
            </form>
            <table>
              <tr>
                <th>Frete</th>
                <th>Valor</th>
                <th>Prazo</th>
              </tr>
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
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
