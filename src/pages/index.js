import Head from "next/head";
import Navbar from "@/components/Navbar/navbar";
import styles from "src/styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer/footer";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);
  const removeNavbar = () => {
    setActive(false);
  };

  return (
    <>
      <Head>
        <title>LINKED DAO</title>
        <meta name="description" content="Unlock the power of Web2 and Web3 technologies with Linked DAO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Navbar current="Home" active={active} setActive={setActive} />
      <header
        className={`${styles.heading} ${styles.container}`}
        onClick={removeNavbar}
      >
        <h1>The Future of Digital Technology</h1>
        <p>
          Unlock the power of Web2 and Web3 technologies with Linked DAO. Our
          cutting-edge blockchain-based project is dedicated to creating hybrid
          flagship products that seamlessly blend the best of both worlds.
        </p>
        <div className={styles.btnGroup}>
          <Link href="#">
            <button className={`${styles.button}`}>Light paper</button>
          </Link>
          <Link href="#">
            <button className={`${styles.button} ${styles.greenBtn}`}>
              Join Discord
            </button>
          </Link>
        </div>
        <Image src="/Head.png" width={628} height={628} alt="" />
      </header>
      <div
        className={`${styles.container} ${styles.myylink}`}
        onClick={removeNavbar}
      >
        <div className={styles.image}>
          <Image src="/Myylink.png" width={694} height={427} alt="" />
        </div>
        <div className={styles.info}>
          <h1>
            <span className={styles.white}>Introducing</span> Myylink
          </h1>
          <p>
            The Ultimate Social and Link Optimizing Platform Say goodbye to the
            hassle of managing multiple social accounts.
          </p>
          <Link href="#"><button className={styles.button}>Learn more</button></Link>
        </div>
      </div>
      <div
        className={`${styles.community} ${styles.container}`}
        onClick={removeNavbar}
      >
        <h2>Join Our Community Today</h2>
        <p>
          Experience the future of digital technology with Linked DAO. Join our
          community of forward-thinking users and take your digital presence to
          the next level. Discover the power of Myylink and unlock the full
          potential of your online identity
        </p>
        <Link href="#"><button className={styles.button}>Join Discord</button></Link>
      </div>
      <Footer removeNavbar={removeNavbar} />
    </>
  );
}
