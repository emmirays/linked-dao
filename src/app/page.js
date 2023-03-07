import Image from "next/image";
import Sidebar from "./components/Sidebar";
import styles from "src/app/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.div}></div>
      <form className={styles.form}>
        <div className={styles.field}>
          <label>Snap Token</label>
          <input type="text" placeholder="Enter Contact Address" required />
        </div>
        <div className={styles.field}>
          <label>Air drop Token</label>
          <input type="text" placeholder="Enter Contact Address" required />
        </div>
        <button disabled className={styles.btn}>
          Run Snapshot
        </button>
      </form>
    </main>
  );
}
