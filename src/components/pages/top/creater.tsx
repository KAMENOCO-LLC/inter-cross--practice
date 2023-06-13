import { FC } from 'react'
import styled from 'styled-components'
import { SectionTitle } from '@/components/atoms/senction-title'
import { ContentListItem } from '@/components/atoms/content-list-item'
import { CreaterList } from '@/const/creater-list'

const Creater: FC = () => {
  return (
    <Wrap>
      <SectionTitle title={'Creater'} />
      <List>
        {CreaterList.map((data, index) => (
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
  max-width: 960px;
`
const List = styled.ul`
  margin-top: 60px;
  text-align: center;
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 263px);
    place-content: center;
    gap: 16px;
  }
`
export default Creater
