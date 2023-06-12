import {FC} from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const About: FC = () => {
    return (
        <Wrap>
            <TitleBox>
                <Title>
                    About
                </Title>
            </TitleBox>
            <FlexBox>
                <Image src={'/images/about.jpg'} alt={'プロフィール画像'} width={100} height={100}/>
                <Container>
                    <Name>
                        KAKERU MIYAICHI
                    </Name>
                    <Text>
                        テキストテキストテキストテキストテキストテキストテキスト<PcBr/>テキストテキストテキストテキストテキストテキストテキスト<PcBr/>テキストテキストテキストテキストテキストテキストテキスト
                    </Text>
                </Container>
            </FlexBox>
        </Wrap>
    )
}


const Wrap = styled.section`
  max-width: 960px;
  padding: 0 4%;
  margin: 80px auto 0 auto;
`
const TitleBox = styled.div`
  text-align: center;
`
const Title = styled.h1`
  display: inline-block;
  color: #383E45;
  font-size: 32px;
  line-height: 48px;
  font-family: 'メイリオ', 'Meiryo', 'MS ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;;
  letter-spacing: 0;
  border-bottom-style: solid;
  border-bottom-color: #383E45;
  border-bottom-width: 1px;
`
const FlexBox = styled.div`
  margin-top: 60px;

  img {
    display: block;
    border-radius: 90px;
    margin: 0 auto;
    vertical-align: middle;
  }

  @media (min-width: 600px ) {
    display: flex;
    justify-content: center;
    margin-top: 70px;
    gap: 30px;
    align-items: center;
    img {
      margin: unset;
    }
  }
`
const Container = styled.div`
  @media (min-width: 600px) {
    width: 403px;
  }
`
const Line = styled.div`
  width: 101px;
  margin: 0 auto;
  border-color: #383E45;
  border-style: solid;
  border-width: 1px;
`
const Name = styled.h2`
  margin-top: 10px;
  color: #383E45;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  font-family: 'メイリオ', 'Meiryo', 'MS ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
  letter-spacing: 0;
  text-align: left;
  @media (min-width: 600px) {
    margin-top: unset;
  }
`
const Text = styled.h3`
  margin-top: 10px;
  color: #383E45;
  font-size: 14px;
  line-height: 21px;
  font-family: 'メイリオ', 'Meiryo', 'MS ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;
  letter-spacing: 0;
  text-align: left;
`

const PcBr = styled.br`
  @media (min-width: 600px) {
    display: none;
  }
`

export default About
