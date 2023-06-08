import { FC } from 'react'
import styled from 'styled-components'

const Footer: FC = () => {
  return <Wrap>&copy; 2020 Profile</Wrap>
}

const Wrap = styled.footer`
  margin: 10px auto;
  text-align: center;
  font-size: 10px;
  line-height: 15px;
  font-family:'メイリオ', 'Meiryo','MS ゴシック','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
  letter-spacing: 0;
  color: #383E45;
`

export default Footer
