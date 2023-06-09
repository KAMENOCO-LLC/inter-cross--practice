import { NextPageWithLayout } from 'next'
import DefaultLayout from '@/components/layout/default-layout'
import Mv from "@/components/pages/top/mv";

const Home: NextPageWithLayout = () => {
  return (<><Mv /></>)
}

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Home
