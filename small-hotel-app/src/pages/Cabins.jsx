import { useEffect } from 'react'
import Row from '../ui/Row'
import Heading from '../ui/Heading'
import { getCabins } from '../services/apiCabins'

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data))
  }, [])

  return (
    <Row type="horizontal">
      <Heading as="h1">All Cabins</Heading>
    </Row>
  )
}

export default Cabins
