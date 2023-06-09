import { FC } from 'react'
import styled from 'styled-components'

const Footer: FC = () => {
  return <Wrap>&copy; 2020 Profile</Wrap>
}

const Wrap = styled.small`
  margin: 10px auto;
  color: #383E45;
  font-size: 10px;
  line-height: 15px;
  font-family:'メイリオ', 'Meiryo','MS ゴシック','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
  letter-spacing: 0;
  text-align: center;
`

export default Footer
