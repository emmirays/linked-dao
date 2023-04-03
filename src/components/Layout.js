import Footer from "./Footer/footer";
import Navbar from "./Navbar/navbar";
import { useState } from "react";

export default function Layout({ children }) {
  const [active, setActive] = useState(false);
  return (
    <main>
      <Navbar active={active} setActive={setActive} />
      {children}
      <Footer />
    </main>
  );
}
