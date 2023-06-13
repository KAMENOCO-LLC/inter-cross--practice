import { NextPageWithLayout } from 'next'
import DefaultLayout from '@/components/layout/default-layout'
import Bicycle from '@/components/pages/top/bicycle'
import Mv from '@/components/pages/top/mv'
import About from '@/components/pages/top/about'
import Blog from '@/components/pages/top/blog'
import Creater from '@/components/pages/top/creater'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Mv />
      <About />
      <Bicycle />
      <Blog />
      <Creater />
    </>
  )
}

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Home
