import { FC } from 'react'
import styled from 'styled-components'
import { SectionTitle } from '@/components/atoms/senction-title'
import { ContentListItem } from '@/components/atoms/content-list-item'
import { BlogItem } from '@/const/blog-item'

const Blog: FC = () => {
  return (
    <Wrap>
      <SectionTitle title={'Blog'} />
      <List>
        {BlogItem.map((data, index) => (
          <ContentListItem
            imgSrc={data.imgSrc}
            imgAlt={data.imgAlt}
            title={data.title}
            text={data.text}
            key={index}
          />
        ))}
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
