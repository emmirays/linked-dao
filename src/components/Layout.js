import Footer from "./Footer/footer";
import Navbar from "./Navbar/navbar";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
