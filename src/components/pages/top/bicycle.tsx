import { FC } from 'react'
import styled from 'styled-components'
import { SectionTitle } from '@/components/atoms/senction-title'
import { ContentListItem } from '@/components/atoms/content-list-item'

const Bicycle: FC = () => {
  return (
    <Wrap>
      <SectionTitle title={'Bicycle'} />
      <List>
        <ContentListItem
          imgSrc={'/images/bicycle1.jpg'}
          imgAlt={'太陽を背にした自転車'}
          title={'タイトルタイトル'}
          text={'テキストテキストテキスト'}
        />
        <ContentListItem
          imgSrc={'/images/bicycle2.jpg'}
          imgAlt={'壁に立てかけられた自転車'}
          title={'タイトルタイトル'}
          text={'テキストテキストテキスト'}
        />
        <ContentListItem
          imgSrc={'/images/bicycle3.jpg'}
          imgAlt={'部屋に飾られた自転車'}
          title={'タイトルタイトル'}
          text={'テキストテキストテキスト'}
        />
      </List>
    </Wrap>
  )
}
const Wrap = styled.section`
  padding: 0 4%;
  margin: 100px auto 0;
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
export default Bicycle
