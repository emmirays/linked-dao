import Image from "next/image";
import styles from "./style.module.css";

export default function Address() {
  return (
    <>
      <div className={styles.address}>
        <div className={styles.flex}>
          <Image src="/avatar.svg" width={32} height={32} priority={100} quality={100} alt="" />
          <p>Oxwi14 hkb3hvd8b2chjshdvbhwiv23fd</p>
        </div>
        <Image width={32} height={32} priority={100} quality={100} src="/link.svg" alt="" />
      </div>
    </>
  );
}
