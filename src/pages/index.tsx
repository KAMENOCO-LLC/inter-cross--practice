import { NextPageWithLayout } from 'next'
import DefaultLayout from '@/components/layout/default-layout'
import About from "@/components/pages/top/about";

const Home: NextPageWithLayout = () => {
  return (<><About /></>
  )
}

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Home
