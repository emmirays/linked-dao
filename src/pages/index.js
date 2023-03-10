import Navbar from "@/components/Navbar/navbar";
import styles from 'src/styles/Home.module.css';
import Image from 'next/image';
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className={`${styles.heading} ${styles.container}`}>
        <h1>The Future of Digital Technology</h1>
        <p>Unlock the power of Web2 and Web3 technologies with Linked DAO. Our cutting-edge blockchain-based project is dedicated to creating hybrid flagship products that seamlessly blend the best of both worlds.</p>
        <div className={styles.btnGroup}>
          <button className={`${styles.button}`}>Light paper</button>
          <button className={`${styles.button} ${styles.greenBtn}`}>Join Discord</button>
        </div>
          <Image src="/Head.png" width={628} height={628} alt="" />
      </header>
      <div className={`${styles.container} ${styles.myylink}`}>
        <div className={styles.image}>
          <Image src="/Myylink.png" width={694} height={427} alt="" />
        </div>
        <div className={styles.info}>
          <h1><span className={styles.white}>Introducing</span> Myylink</h1>
          <p>The Ultimate Social and Link Optimizing Platform
            Say goodbye to the hassle of managing multiple social accounts. </p>
          <button className={styles.button}>Learn more</button>
        </div>
      </div>
      <div className={`${styles.community} ${styles.container}`}>
        <h2>Join Our Community Today</h2>
        <p>Experience the future of digital technology with Linked DAO. Join our community of forward-thinking users and take your digital presence to the next level. Discover the power of Myylink and unlock the full potential of your online identity</p>
        <button className={styles.button}>Join Discord</button>
      </div>
      <Footer />
    </>
  );
}
