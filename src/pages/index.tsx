import {NextPageWithLayout} from "next";
import DefaultLayout from "@/components/layout/default-layout";

const Home: NextPageWithLayout = () => {
  return (
    <>Inter-cross Practice</>
  )
};

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Home;
