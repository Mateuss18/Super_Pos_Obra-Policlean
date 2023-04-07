import React from 'react'
import Product from './Product/Product'
import Navgation from './Navgation/Navgation'
import SectionWhatIts from './SectionWhatIts/SectionWhatIts'
import SectionBenefits from './SectionBenefits/SectionBenefits'
import SectionHowToUse from './SectionHowToUse/SectionHowToUse'
import SectionDescription from './SectionDescription/SectionDescription'
import SectionWhoIsPO from './SectionWhoIsPO/SectionWhoIsPO'
import SectionExplanation from './SectionExplanation/SectionExplanation'

const Main = () => {
  return (
    <main>
      <Product />
      <Navgation />
      <SectionWhatIts />
      <SectionBenefits />
      <SectionHowToUse />
      <SectionDescription />
      <SectionWhoIsPO />
      <SectionExplanation />
    </main>
  )
}

export default Main
