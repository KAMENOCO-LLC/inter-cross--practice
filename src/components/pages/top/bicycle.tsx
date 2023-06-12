import {FC} from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Bicycle: FC = () => {
    return (
        <Wrap>
            <Title>
                Bicycle
            </Title>
            <Line></Line>
            <List>
                <Content>
                    <Image src={'/images/bicycle1.jpg'} alt={'太陽を背にした自転車'} width={345} height={228}/>
                    <ContentTitle>タイトルタイトル</ContentTitle>
                    <ContentText>テキストテキストテキスト</ContentText>
                </Content>
                <Content>
                    <Image src={'/images/bicycle2.jpg'} alt={'壁に立てかけられた自転車'} width={345} height={228}/>
                    <ContentTitle>タイトルタイトル</ContentTitle>
                    <ContentText>テキストテキストテキスト</ContentText>
                </Content>
                <Content>
                    <Image src={'/images/bicycle3.jpg'} alt={'部屋に飾られた自転車'} width={345} height={228}/>
                    <ContentTitle>タイトルタイトル</ContentTitle>
                    <ContentText>テキストテキストテキスト</ContentText>
                </Content>
            </List>
        </Wrap>
    )
}
const Wrap = styled.section`
  margin-top: 100px;
`
const Title = styled.h1`
  color: #383E45;
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  font-family: 'メイリオ', 'Meiryo', 'MS ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
  text-align: center;

`
const Line = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: #383E45;
  width: 117px;
  margin: 0 auto;

`
const List = styled.ul`
  margin-top: 60px;
  gap: 16px;
  text-align: center;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`
const Content = styled.li`
  margin-top: 30px;

  img {
    vertical-align: middle;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    img {
      width: 263px;
      height: 174px;
    }
  }
`
const ContentTitle = styled.h2`
  margin-top: 10px;
  color: #383E45;
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  font-family: 'メイリオ', 'Meiryo', 'MS ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
  text-align: center;

`
const ContentText = styled.p`
  margin-top: 10px;
  color: #383E45;
  font-size: 14px;
  line-height: 21px;
  font-family: 'メイリオ', 'Meiryo', 'MS ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
  text-align: center;
`

export default Bicycle