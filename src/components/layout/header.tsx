import {FC} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const Header: FC = () => {
    return (
        <Wrap>
            <Title>
                <Link href={'/'}>
                    <Image src={'/images/logo.svg'} alt={'ロゴマーク'} width={120} height={40} />
                </Link>
            </Title>
            <Menu>
                <Link href={'/'}>
                    About
                </Link>
                <Link href={'/'}>
                    Bicycle
                </Link>
            </Menu>
        </Wrap>
    )
}

const Wrap = styled.header`
  display: flex;
  justify-content: space-between;
  background: #FFFFFF;
`
const Menu = styled.nav`
  display: flex;
  gap: 30px;
  margin: 20px 10px;
  a {
    text-decoration: none;
    color: black;
    
  }
  @media (min-width: 768px) {
    margin-right: 230px;
    align-items: center;
    a:hover{
      opacity: 0.7;
    }
  }
`
const Title = styled.h1`
  margin:10px;
  @media (min-width:768px){
  margin-left: 230px;
    img{
      vertical-align: middle;
    }
}
`
const a = styled.p`
  font: normal normal normal 14px/21px Meiryo;
  letter-spacing: 0;
  color: #24292E;
  opacity: 1;
`
export default Header
