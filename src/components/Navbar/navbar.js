import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";

export default function Navbar({ active, setActive }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image src="/logo.svg" width={43} height={43} alt="logo" />
        <span className={styles.logoText}>LINKED DAO</span>
      </div>
      <div className={`${styles.navLinks} ${active && styles.active}`}>
        <Link className={styles.active} href="/">
          Home
        </Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact Us</Link>
      </div>
      <button className={`${styles.btn} ${active && styles.active}`}>
        Join Discord
      </button>
      <button
        className={styles.burger}
        onClick={() => setActive(!active)}
      ></button>
    </div>
  );
}
