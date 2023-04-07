import React from 'react'
import LogoEureciclo from './assets/logo_eureciclo.png'
import LogoPolicleanOiradQuimica from './assets/logo_policlean_oirad_quimica.png'
import SecuritySeals from './assets/security_seals.png'
import Correios from './assets/correios.png'
import Pac from './assets/pac.png'
import Sedex from './assets/sedex.png'
import { MdPhoneInTalk, MdPhoneAndroid, MdLocationOn } from 'react-icons/md'
import { GoMail, GoCreditCard } from 'react-icons/go'
import {
  FaRegCreditCard,
  FaCreditCard,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDinersClub,
  FaCcDiscover,
  FaCcAmazonPay,
  FaCcStripe
} from 'react-icons/fa'
import { BsYoutube, BsLinkedin, BsInstagram, BsFacebook } from 'react-icons/bs'
import './footerTop.scss'

const FooterTop = () => {
  return (
    <div className="footer-top">
      <div className="wrapper">
        <div className="columns">
          <div className="col-1">
            <img
              src={LogoPolicleanOiradQuimica}
              alt="Logo Policlean Oirad Quimica"
            />
            <p className="slogan">
              Fácil assim, limpeza é <span>Policlean!</span>
            </p>
            <div className="social">
              <p>Redes Sociais</p>
              <div className="images">
                <BsInstagram size={'45px'} />
                <BsFacebook size={'45px'} />
                <BsLinkedin size={'45px'} />
                <BsYoutube size={'45px'} />
              </div>
            </div>
            <img src={LogoEureciclo} alt="Logo Eureciclo" />
          </div>
          <div className="lists">
            <ul className="list-1 list">
              <li>
                <b>Policlean Oirad</b>
              </li>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Quem Somos</a>
              </li>
              <li>
                <a href="">Linha de produtos</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contato</a>
              </li>
              <li>
                <a href="">Seja um representante</a>
              </li>
              <li>
                <a href="">Política de Privacidade</a>
              </li>
            </ul>
            <ul className="list-2 list">
              <li>
                <b>Linhas de Produtos</b>
              </li>
              <li>
                <a href="">Limpeza e higienização</a>
              </li>
              <li>
                <a href="">Piscina</a>
              </li>
              <li>
                <a href="">Profissional</a>
              </li>
              <li>
                <a href="">Tratamento de Pisos</a>
              </li>
              <li>
                <a href="">Automotiva</a>
              </li>
            </ul>
            <ul className="list-3 list">
              <li>
                <b>Entre em contato</b>
              </li>
              <li>
                <a href="">
                  <GoMail size={'27px'} />
                  contato@policlean.com.br
                </a>
              </li>
              <li>
                <a href="">
                  <MdPhoneInTalk size={'27px'} />
                  (19) 3276.7722
                </a>
              </li>
              <li>
                <a href="">
                  <MdPhoneAndroid size={'27px'} />
                  (19) 99862.3431
                </a>
              </li>
              <li>
                <a href="" className="address">
                  <MdLocationOn size={'27px'} />
                  <div>
                    <p>Av. Eng. Antônio Francisco Paula Souza</p>
                    <p>1149, Vila Paraíso</p>
                    <p>Campinas - SP | CEP 13043-540</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <div className="payment-types">
              <p className="title">Formas de pagamento</p>
              <div className="payments">
                <FaRegCreditCard size={'45px'} />
                <FaCcVisa size={'45px'} />
                <FaCcMastercard size={'45px'} />
                <FaCcAmex size={'45px'} />
                <FaCreditCard size={'45px'} />
                <FaCcDinersClub size={'45px'} />
                <FaCcStripe size={'45px'} />
                <FaRegCreditCard size={'45px'} />
                <GoCreditCard size={'45px'} />
                <FaCcDiscover size={'45px'} />
                <FaRegCreditCard size={'45px'} />
                <GoCreditCard size={'45px'} />
                <FaCcAmazonPay size={'45px'} />
                <FaRegCreditCard size={'45px'} />
                <FaCreditCard size={'45px'} />
                <FaRegCreditCard size={'45px'} />
              </div>
            </div>
            <div className="delivery-types">
              <p className="title">Formas de envio</p>
              <div className="deliveries">
                <img src={Correios} alt="Icone Correios" />
                <img src={Pac} alt="Icone Pac" />
                <img src={Sedex} alt="Icone Sedex" />
              </div>
            </div>
          </div>
        </div>
        <div className="divisor"></div>
        <div className="security-seals">
          <div className="title">Selos de segurança</div>
          <div className="stamps">
            <img src={SecuritySeals} alt="Selos de segurança" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterTop
