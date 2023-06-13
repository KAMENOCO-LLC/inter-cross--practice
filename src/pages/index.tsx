import { NextPageWithLayout } from 'next'
import DefaultLayout from '@/components/layout/default-layout'
import Bicycle from '@/components/pages/top/bicycle'
import Mv from '@/components/pages/top/mv'
import About from '@/components/pages/top/about'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Mv />
      <About />
      <Bicycle />
    </>
  )
}

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Home
