import { FC } from 'react'
import styled from 'styled-components'

const Footer: FC = () => {
  return <Wrap>&copy;2020 Profile</Wrap>
}

const Wrap = styled.footer`
margin: 10px auto;
  text-align: center;
  font: normal normal normal 10px/15px Meiryo;
  letter-spacing: 0px;
  color: #383E45;
  opacity: 1;
`

export default Footer
