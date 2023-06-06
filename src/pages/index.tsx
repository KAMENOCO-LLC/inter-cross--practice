import { NextPageWithLayout } from "next";
import DefaultLayout from "@/components/layout/default-layout";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Home;
