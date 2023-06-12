import { NextPageWithLayout } from 'next'
import DefaultLayout from '@/components/layout/default-layout'
import Bicycle from "@/components/pages/top/bicycle";

const Home: NextPageWithLayout = () => {
  return <><Bicycle /></>
}

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>

export default Home
