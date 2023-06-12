import {FC} from 'react'
import styled from 'styled-components'

const Footer: FC = () => {
    return (
        <Wrap>
            <Small>&copy; 2020 Profile</Small>
        </Wrap>
    )
}
const Wrap = styled.footer`
  margin: 110px 0 10px 0;
  text-align: center;
`
const Small = styled.small`
  color: #383E45;
  font-size: 10px;
  line-height: 15px;
  font-family: 'メイリオ', 'Meiryo', 'MS ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
  letter-spacing: 0;
  text-align: center;
`

export default Footer
