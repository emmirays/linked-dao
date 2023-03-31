import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";

export default function Navbar({ active, setActive }) {
  return (
    <div className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.svg" width={43} height={43} alt="logo" />
        <span className={styles.logoText}>LINKED DAO</span>
      </Link>
      <div className={`${styles.navLinks} ${active && styles.active}`}>
        <Link className={styles.active} href="/">
          Home
        </Link>
        <Link href="/null">About Us</Link>
        <Link href="/null">Contact Us</Link>
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
    </div>
  );
}
