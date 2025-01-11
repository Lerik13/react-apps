import { useState } from 'react'
import CabinTable from '../features/cabins/CabinTable'
import AddCabin from '../features/cabins/AddCabin'
import Row from '../ui/Row'
import Heading from '../ui/Heading'
import Button from '../ui/Button'

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />

        <AddCabin />
      </Row>
    </>
  )
}

export default Cabins
