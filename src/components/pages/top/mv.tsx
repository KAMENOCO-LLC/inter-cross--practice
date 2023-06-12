import {FC} from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Mv: FC = () => {
    return(
      <Wrap>
          <Image src={'/images/mainvisual.jpg'} alt={'自転車が立てかけられている写真'} width={1280} height={600} />
      </Wrap>
    )
}
const Wrap = styled.section`
    img{
      width: 100%;
      height: 600px;
      object-fit: cover;
      vertical-align: middle;
    }
`


export default Mv