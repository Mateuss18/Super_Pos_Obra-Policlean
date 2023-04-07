import React from 'react'
import LogoAgencia from './assets/logo_agenciadelucca.png'
import './footerBottom.scss'

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="wrapper">
        <p>
          COPYRIGHT POLICLEAN OIRAD QUÍMICA - 50090646000185 - 2022. TODOS OS
          DIREITOS RESERVADOS
        </p>
        <img src={LogoAgencia} alt="Logo da agencia" />
      </div>
    </div>
  )
}

export default FooterBottom
