import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.css';

export default function Footer() {
      return (
            <footer className={styles.footer}>
                  <div className={styles.logo}>
                        <Image src="/logo-white.svg" width={43} height={43} alt="logo" />
                        <span className={styles.logoText}>LINKED DAO</span>
                  </div>
                  <div className={styles.foot}>
                        <div className={styles.links}>
                              <ul>
                                    <li>
                                          <Link href="#">About Us</Link>
                                    </li>
                                    <li>
                                          <Link href="#">Contact Us</Link>
                                    </li>
                                    <li>
                                          <Link href="#">Terms of Service</Link>
                                    </li>
                              </ul>
                              <ul>
                                    <li>
                                          <Link href="#">FAQs</Link>
                                    </li>
                                    <li>
                                          <Link href="#">Privacy</Link>
                                    </li>
                                    <li>
                                          <Link href="#">Products</Link>
                                    </li>
                              </ul>
                        </div>
                        <div className={styles.socials}>
                              <h3>Stay Updated! Join our Communities</h3>
                              <div className={styles.socialLinks}>
                                    <Link href="#">
                                          <Image src="/Twitter.svg" width={24} height={24} />
                                    </Link>
                                    <Link href="#">
                                          <Image src="/Twitter.svg" width={24} height={24} />
                                    </Link>
                                    <Link href="#">
                                          <Image src="/Twitter.svg" width={24} height={24} />
                                    </Link>
                                    <Link href="#">
                                          <Image src="/Twitter.svg" width={24} height={24} />
                                    </Link>
                                    <Link href="#">
                                          <Image src="/Twitter.svg" width={24} height={24} />
                                    </Link>
                                    <Link href="#">
                                          <Image src="/Twitter.svg" width={24} height={24} />
                                    </Link>
                              </div>
                        </div>
                  </div>
            </footer>
      )
}