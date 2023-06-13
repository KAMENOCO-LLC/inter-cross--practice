import { FC } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
type Props = {
  imgSrc: string
  imgAlt: string
  title: string
  text: string
}
const ContentListItem: FC<Props> = (props) => {
  return (
    <Content>
      <Image src={props.imgSrc} alt={props.imgAlt} width={345} height={228} />
      <ContentTitle>{props.title}</ContentTitle>
      <ContentText>{props.text}</ContentText>
    </Content>
  )
}
const Content = styled.li`
  margin-top: 30px;

  img {
    vertical-align: middle;
  }
`
const ContentTitle = styled.h2`
  margin-top: 10px;
  color: #383e45;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  font-family: 'メイリオ', 'Meiryo', 'MS ゴシック', 'Hiragino Kaku Gothic ProN',
    'ヒラギノ角ゴ ProN W3', sans-serif;
  text-align: center;
`
const ContentText = styled.p`
  margin-top: 10px;
  color: #383e45;
  font-size: 14px;
  line-height: 21px;
  font-family: 'メイリオ', 'Meiryo', 'MS ゴシック', 'Hiragino Kaku Gothic ProN',
    'ヒラギノ角ゴ ProN W3', sans-serif;
  text-align: center;
`
export default ContentListItem
