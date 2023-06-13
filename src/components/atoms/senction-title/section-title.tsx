import { FC } from 'react'
import styled from 'styled-components'
type Props = {
  title: string
}
const SectionTitle: FC<Props> = (props) => {
  return (
    <TitleBox>
      <Title>{props.title}</Title>
    </TitleBox>
  )
}
const TitleBox = styled.div`
  text-align: center;
`
const Title = styled.h1`
  display: inline-block;
  color: #383e45;
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  font-family: 'メイリオ', 'Meiryo', 'MS ゴシック', 'Hiragino Kaku Gothic ProN',
    'ヒラギノ角ゴ ProN W3', sans-serif;
  border-bottom-style: solid;
  border-bottom-color: #383e45;
  border-bottom-width: 1px;
`
export default SectionTitle
