import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";

export default function Navbar({ active, setActive, current }) {
  const Home = current === "Home" ? styles.current : undefined;
  const aboutUs = current === "About Us" ? styles.current : undefined;
  const contactUs = current === "Contact Us" ? styles.current : undefined;
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.svg" width={43} height={43} alt="logo" />
        <span className={styles.logoText}>LINKED DAO</span>
      </Link>
      <div className={`${styles.navLinks} ${active && styles.active}`}>
        <Link className={Home} href="/">
          Home
        </Link>
        <Link className={aboutUs} href="/null">
          About Us
        </Link>
        <Link className={contactUs} href="/null">
          Contact Us
        </Link>
      </div>
      <Link href="#">
        <button className={`${styles.btn} ${active && styles.active}`}>
          Join Discord
        </button>
      </Link>
      <button className={styles.burger} onClick={() => setActive(!active)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
    </nav>
  );
}
