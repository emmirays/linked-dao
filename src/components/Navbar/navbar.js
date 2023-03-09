import Link from 'next/link';
import styles from './style.module.css';
import Image from 'next/image';

export default function Navbar() {
      return (
            <div className={styles.navbar}>
                  <div className={styles.logo}>
                        <Image src="/logo.svg" width={43} height={43} alt="logo" />
                        <span className={styles.logoText}>LINKED DAO</span>
                  </div>
                  <div className={styles.navLinks}>
                        <ul>
                              <li>
                                    <Link href="#" className={styles.active}>Home</Link>
                              </li>
                              <li>
                                    <Link href="#">About Us</Link>
                              </li>
                              <li>
                                    <Link href="#">Contact Us</Link>
                              </li>
                        </ul>
                  </div>
                  <button>Join Discord</button>
            </div>
      )
}