import Header from "../components/Header";
import Footer from "./Footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
