import { FC } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Bicycle: FC = () => {
  return (
    <Wrap>
      <TitleBox>
        <Title>Bicycle</Title>
      </TitleBox>
      <List>
        <Content>
          <Image
            src={'/images/bicycle1.jpg'}
            alt={'太陽を背にした自転車'}
            width={345}
            height={228}
          />
          <ContentTitle>タイトルタイトル</ContentTitle>
          <ContentText>テキストテキストテキスト</ContentText>
        </Content>
        <Content>
          <Image
            src={'/images/bicycle2.jpg'}
            alt={'壁に立てかけられた自転車'}
            width={345}
            height={228}
          />
          <ContentTitle>タイトルタイトル</ContentTitle>
          <ContentText>テキストテキストテキスト</ContentText>
        </Content>
        <Content>
          <Image
            src={'/images/bicycle3.jpg'}
            alt={'部屋に飾られた自転車'}
            width={345}
            height={228}
          />
          <ContentTitle>タイトルタイトル</ContentTitle>
          <ContentText>テキストテキストテキスト</ContentText>
        </Content>
      </List>
    </Wrap>
  )
}
const Wrap = styled.section`
  padding: 0 4%;
  margin: 100px auto 0;
`
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
const List = styled.ul`
  margin-top: 60px;
  text-align: center;
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 345px);
    place-content: center;
    gap: 16px;
  }
`
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

export default Bicycle
