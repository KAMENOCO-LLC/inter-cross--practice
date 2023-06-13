import { FC } from 'react'
import styled from 'styled-components'
import { SectionTitle } from '@/components/atoms/senction-title'
import { ContentListItem } from '@/components/atoms/content-list-item'

const Blog: FC = () => {
  return (
    <Wrap>
      <SectionTitle title={'Blog'} />
      <List>
        <ContentListItem
          imgSrc={'/images/bicycle1.jpg'}
          imgAlt={'ブログ画像１'}
          title={'タイトルタイトル'}
          text={'テキストテキストテキスト'}
        />
        <ContentListItem
          imgSrc={'/images/bicycle2.jpg'}
          imgAlt={'ブログ画像２'}
          title={'タイトルタイトル'}
          text={'テキストテキストテキスト'}
        />
        <ContentListItem
          imgSrc={'/images/bicycle3.jpg'}
          imgAlt={'ブログ画像３'}
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
export default Blog
