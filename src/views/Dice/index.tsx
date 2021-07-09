import React from 'react'
import { Text } from '@heswap/uikit'
import Flex from 'components/layout/Flex'
import Page from 'components/layout/Page'
import RollingDice from 'components/RollingDice'
import PageHeader from './PageHeader'

const Dice: React.FC = () => {
  return (
    <>
      <PageHeader>
        <RollingDice />
      </PageHeader>
    </>
  )
}

export default Dice
