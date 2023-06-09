import {FC} from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const About: FC = () => {
    return (
        <Wrap>
            <Title>
                About
            </Title>
            <Line></Line>
            <FlexBox>
                <Image src={'/images/about.jpg'} alt={'プロフィール画像'} width={100} height={100}/>
                <Container>
                    <Name>
                        KAKERU MIYAICHI
                    </Name>
                    <Text>
                        テキストテキストテキストテキストテキストテキストテキスト<Nl /> テキストテキストテキストテキストテキストテキストテキスト<Nl />テキストテキストテキストテキストテキストテキストテキスト
                    </Text>
                </Container>
            </FlexBox>
        </Wrap>
    )
}


const Wrap = styled.div`
  margin-top: 80px;
`
const FlexBox =styled.div`
  img{
    border-radius: 90px;
    display: block;
    margin: 0 auto;
    vertical-align: middle;
  @media(min-width: 768px){
    margin:unset;
  }
  }
  margin-top: 60px;
@media(min-width:768px ){
  display: flex;
  justify-content: center; 
  margin-top: 70px;
  gap: 30px;
}
`
const Container = styled.div`
  width: 345px;
  margin: 0 auto;
  @media(min-width: 768px){
    margin: unset;
  }
`
const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  line-height: 48px;
  font-family: 'メイリオ', 'Meiryo', 'MS ゴシック', 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', sans-serif;;
  letter-spacing: 0;
  color: #383E45;
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
  @media(min-width: 768px){
    margin-top:unset;
  }
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  font-family:'メイリオ', 'Meiryo','MS ゴシック','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
  letter-spacing: 0;
  color: #383E45;
`
const Text = styled.h3`
    margin-top: 10px;
  text-align: left;
  font-size: 14px;
  line-height: 21px;
  font-family:'メイリオ', 'Meiryo','MS ゴシック','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
  letter-spacing: 0;
  color: #383E45;
`

const Nl = styled.br`
@media(min-width: 768px){
  display: none;
}
`

export default About
