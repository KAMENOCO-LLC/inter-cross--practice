import { NextPageWithLayout } from 'next'
import DefaultLayout from '@/components/layout/default-layout'
import Mv from '@/components/pages/top/mv'
import About from '@/components/pages/top/about'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Mv />
      <About />
    </>
  )
}

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Home
