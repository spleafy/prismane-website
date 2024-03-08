import { FC, ReactNode } from "react";
// Containers
import News from "./News";
import Header from "./Header";
import Footer from "./Footer";

interface T {
  children: ReactNode;
}

export const Layout: FC<T> = ({ children }) => {
  return (
    <>
      {/* <News /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
