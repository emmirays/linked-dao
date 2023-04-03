import Head from "next/head";
import Sidebar from "@/components/Sidebar/sidebar";
import styles from "src/styles/Snapshots.module.css";
import Image from "next/image";
import { useState } from "react";
import Address from "@/components/address/address";

export default function Snapshots() {
  const [active, setActive] = useState(false);
  const removeNavbar = () => {
    setActive(false);
  };

  return (
    <>
      <Head>
        <title>Snapshots - LINKED DAO</title>
        <meta name="description" content="Unlock the power of Web2 and Web3 technologies with Linked DAO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
        <Sidebar active={active} setActive={setActive} />
        <div className={styles.div}></div>
        <form className={styles.form} onClick={removeNavbar}>
          <div className={styles.top}>
            <div className={styles.field}>
              <label>Snap Token</label>
              <input type="text" placeholder="Enter Contact Address" required />
            </div>
            <div className={styles.field}>
              <label>Air drop Token</label>
              <input type="text" placeholder="Enter Contact Address" required />
            </div>
            <div className={styles.balance}>
              <div className={styles.con}>
                <label>Token Name:</label>
                <div className={styles.side}>
                  <Image src="/link.svg" width={32} height={32} alt="" />
                  <p>LINK</p>
                </div>
              </div>
              <div className={styles.con}>
                <label>Your Balance:</label>
                <div className={styles.side}>
                  <p>4,235,421,789</p>
                </div>
              </div>
            </div>
            <div className={styles.history}>
              <div className={styles.head}>
                <p>4,124 wallets. 02/16/2023. less than a minute ago</p>
                <div className={styles.download}>
                  <button>
                    CSV
                    <Image
                      src="/Download.svg"
                      width={16}
                      height={16}
                      alt=""
                    ></Image>
                  </button>
                  <button>
                    JSON
                    <Image
                      src="/Download.svg"
                      width={16}
                      height={16}
                      alt=""
                    ></Image>
                  </button>
                </div>
              </div>
              <div className={styles.addresses}>
                <Address />
                <Address />
                <Address />
                <Address />
                <Address />
                <Address />
                <Address />
                <Address />
                <Address />
                <Address />
                <Address />
                <Address />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.total}>
              <div className={styles.flex}>
                <div className={styles.field}>
                  <label>Ratio of Holders token</label>
                  <input type="text" placeholder="2" />
                </div>
                <p className={styles.dot}>:</p>
                <div className={styles.field}>
                  <label>Ratio of Airdrop token</label>
                  <input type="text" placeholder="3" />
                </div>
              </div>
              <div className={`${styles.flex} ${styles.total_airdrop}`}>
                <p>Total Amount of Airdrop Token:</p>
                <h1>213,124,152</h1>
              </div>
            </div>
            <button className={styles.btn}>Approve Airdrop</button>
          </div>
        </form>
      </main>
    </>
  );
}
