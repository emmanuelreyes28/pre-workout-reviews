import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
