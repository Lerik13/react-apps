import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Button from './ui/Button'
import Input from './ui/Input'
import Heading from './ui/Heading'

const StyledApp = styled.div`
  background-color: lightsteelblue;
  padding: 20px;
  height: 100dvh;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Hello</Heading>

        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert('Check In')}>Check in</Button>
        <Button onClick={() => alert('Check out')}>Check out</Button>

        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  )
}

export default App
