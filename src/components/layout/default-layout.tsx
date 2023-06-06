import { FC, ReactNode } from "react";
import styled from "styled-components";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

type Props = {
  children: ReactNode;
};

const DefaultLayout: FC<Props> = (props) => {
  return (
    <>
      <Header />
      <Contents>{props.children}</Contents>
      <Footer />
    </>
  );
};

const Contents = styled.main``;

export default DefaultLayout;
