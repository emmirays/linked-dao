import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

export default function Sidebar({ active, setActive }) {
  return (
    <>
      <div className={styles.logo_sm}>
        <Image src="/logo.svg" width={43} height={43} alt="logo" />
        <h1>LINKED DAO</h1>
      </div>
      <nav className={`${styles.nav} ${active && styles.active}`} id="navbar">
        <div className={styles.logo}>
          <Image src="/logo.svg" width={43} height={43} alt="logo" />
          <h1>LINKED DAO</h1>
        </div>

        <ul className={styles.pages}>
          <Link href="#">
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 11H4C3.44772 11 3 11.4477 3 12V20H9V11Z"
                  stroke="#909090"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 8H15V20H21V9C21 8.44772 20.5523 8 20 8Z"
                  stroke="#909090"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 4H10C9.44772 4 9 4.44772 9 5V20H15V5C15 4.44772 14.5523 4 14 4Z"
                  stroke="#909090"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Dashboard
            </li>
          </Link>
          <Link href="#">
            <li className={styles.current}>
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 15C21.2091 15 23 13.2091 23 11C23 8.79086 21.2091 7 19 7C18.9764 7 18.9528 7.00021 18.9292 7.00062C18.4442 3.60802 15.5267 1 12 1C9.20335 1 6.78975 2.64004 5.6685 5.01082C3.06162 5.18144 1 7.34996 1 10C1 12.7614 3.23858 15 6 15H19Z"
                  stroke="#909090"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Snapshots
            </li>
          </Link>
          <Link href="#">
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#909090"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.44772 20.5523 3 20 3Z"
                  stroke="#909090"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 21C7 18.2386 9.23858 16 12 16C14.7614 16 17 18.2386 17 21"
                  stroke="#909090"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Audits & KYC
            </li>
          </Link>
          <Link href="#">
            <li>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 21H6C5.44772 21 5 20.5523 5 20L5 4C5 3.44772 5.44772 3 6 3L13.5631 3C13.8416 3 14.1076 3.11619 14.2968 3.32059L18.7338 8.11246C18.9049 8.29731 19 8.53995 19 8.79187L19 20C19 20.5523 18.5523 21 18 21Z"
                  stroke="#909090"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 17H15"
                  stroke="#909090"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 14H15"
                  stroke="#909090"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19 9L14 9C13.4477 9 13 8.55228 13 8L13 3"
                  stroke="#909090"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Docs
            </li>
          </Link>
        </ul>

        <div className={styles.social_links}>
          <a href="#" title="Twitter" className={styles.icon}>
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.0815 2.1522C18.4 2.45176 17.6722 2.65584 16.906 2.74902C17.6869 2.27849 18.2875 1.5369 18.5717 0.652065C17.8394 1.07947 17.0277 1.39058 16.1637 1.56385C15.4737 0.825336 14.4902 0.363281 13.3982 0.363281C11.3058 0.363281 9.60939 2.05979 9.60939 4.14981C9.60939 4.45015 9.64404 4.73893 9.70719 5.01539C6.55752 4.86676 3.76595 3.35431 1.89771 1.06791C1.56888 1.62392 1.38483 2.27002 1.38483 2.97388C1.38483 4.29074 2.05481 5.44818 3.06979 6.12817C2.44833 6.10815 1.86383 5.93719 1.35403 5.6538V5.70077C1.35403 7.53743 2.65779 9.06914 4.3928 9.41799C4.07475 9.50347 3.739 9.54968 3.39477 9.54968C3.15296 9.54968 2.92116 9.52657 2.68936 9.48345C3.17529 10.9874 4.57223 12.084 6.23486 12.1148C4.9411 13.1306 3.30158 13.7359 1.53577 13.7359C1.23544 13.7359 0.935871 13.7182 0.634766 13.6843C2.32049 14.7578 4.30655 15.3855 6.45433 15.3855C13.4268 15.3855 17.2348 9.61282 17.2348 4.61494C17.2348 4.454 17.2348 4.29151 17.2233 4.12979C17.9633 3.5992 18.6094 2.92845 19.1176 2.1676L19.0815 2.1522Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#" title="Discord" className={styles.icon}>
            <svg
              width="19"
              height="13"
              viewBox="0 0 19 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2449 0.204184H12.2569L12.2556 0.200439L12.2449 0.204184ZM12.2039 0.218544L12.2449 0.204184H12.2187L12.2039 0.218544ZM12.1968 0.225423L12.2039 0.218544L12.1843 0.225398L12.1968 0.225423ZM12.1968 0.225423L11.9616 0.453767C14.6002 1.20252 15.8769 2.37181 15.8769 2.37181C14.1763 1.53821 12.6439 1.1214 11.1113 0.952934C10.0039 0.784465 8.89648 0.873066 7.96091 0.952934H7.70634C7.10809 0.952934 5.83521 1.20252 4.12957 1.87016C3.53513 2.12348 3.194 2.28946 3.194 2.28946C3.194 2.28946 4.46942 1.03904 7.27993 0.371404L7.10809 0.202936C7.10809 0.202936 4.97985 0.123069 2.6823 1.78779C2.6823 1.78779 0.384766 5.71124 0.384766 10.5482C0.384766 10.5482 1.65764 12.7195 5.14913 12.8019C5.14913 12.8019 5.65829 12.1367 6.1738 11.5515C4.21358 10.9674 3.44984 9.79942 3.44984 9.79942C3.44984 9.79942 3.62041 9.88178 3.87626 10.049H3.95263C3.98857 10.049 4.00646 10.0656 4.02542 10.0831C4.02661 10.0842 4.0278 10.0853 4.029 10.0864V10.0939C4.04937 10.1139 4.06719 10.1314 4.10538 10.1314C4.14239 10.1463 4.1794 10.1612 4.21636 10.1762C4.59886 10.3305 4.97576 10.4826 5.28916 10.6305C5.88231 10.8826 6.64476 11.1334 7.58033 11.2994C8.7641 11.4679 10.121 11.549 11.6663 11.2994L11.7157 11.2885C12.4629 11.1238 13.2101 10.959 13.9574 10.6318C14.094 10.5631 14.2393 10.4945 14.3921 10.4222C14.7946 10.2319 15.2494 10.0169 15.7356 9.71206C15.7356 9.71206 14.9719 10.8801 12.9289 11.4642C13.349 12.0456 13.9409 12.712 13.9409 12.712C16.8029 12.6507 18.2307 11.1817 18.6952 10.7039C18.7976 10.5986 18.8531 10.5415 18.8669 10.5581C18.8669 5.72871 16.5566 1.79777 16.5566 1.79777C14.4994 0.30022 12.5728 0.22691 12.1968 0.225423ZM6.68806 5.71121C7.57907 5.71121 8.29952 6.45996 8.29952 7.37718C8.29952 8.30064 7.57398 9.04939 6.68297 9.04939C5.79195 9.04939 5.06642 8.30064 5.06642 7.38468C5.06642 6.46122 5.79195 5.71496 6.68297 5.71496L6.68806 5.71121ZM12.4708 5.71121C13.3656 5.71121 14.0873 6.45996 14.0873 7.37718C14.0873 8.30064 13.3617 9.04939 12.4708 9.04939C11.5797 9.04939 10.8542 8.30064 10.8542 7.38468C10.8567 6.46122 11.5835 5.71496 12.4708 5.71496V5.71121Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#" title="Telegram" className={styles.icon}>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5593 2.08119L14.9173 15.0922C14.7343 16.0155 14.2001 16.2368 13.4537 15.8095L9.42848 12.7036L7.48178 14.6649C7.26223 14.8938 7.07927 15.0922 6.67676 15.0922C6.14983 15.0922 6.23765 14.8862 6.062 14.3672L4.67151 9.6436L0.682961 8.34631C-0.180613 8.07922 -0.187932 7.4611 0.873241 7.01087L16.4323 0.753379C17.1421 0.425243 17.8228 0.936525 17.5519 2.07356L17.5593 2.08119Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </nav>
      <button className={styles.burger} onClick={() => setActive(!active)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>
    </>
  );
}
