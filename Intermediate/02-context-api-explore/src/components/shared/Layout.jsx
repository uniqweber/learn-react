
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-60px-388px)] dark:bg-gray-800 container mx-auto py-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
