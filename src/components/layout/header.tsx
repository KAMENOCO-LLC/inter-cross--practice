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
  @media(min-width:768px){
    max-width:820px;
    margin:auto;
  }
`
const Menu = styled.nav`
  display: flex;
  gap: 30px;
  margin: 20px 10px;
  a {
    text-decoration: none;
    font-size: 14px;
    line-height: 21px;
    font-family:'メイリオ', 'Meiryo','MS ゴシック','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
    letter-spacing: 0;
    color: #24292E;
  }
  @media (min-width: 768px) {
    align-items: center;
    a:hover{
      opacity: 0.7;
    }
  }
`
const Title = styled.h1`
  margin:10px;
  @media (min-width:768px){
    img{
      vertical-align: middle;
    }
}
`

export default Header
