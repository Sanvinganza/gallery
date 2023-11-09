import styles from "./GalleryLayout.module.css";
import { Outlet } from "react-router-dom";

export function GalleryLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>lorem</div>
        <div className={styles.info}>
          <div className={styles.username}>username</div>
          <div className={styles.logout}>logout</div>
        </div>
      </div>

      <Outlet />

      <div className={styles.footer_container}>
        <div className={styles.payment}>
          <div className={styles.title}>Lorem</div>
          <div className={styles.discrebe}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            nisl tincidunt eget nullam non nisi est sit amet.
          </div>
          <div className={styles.paycards}>
            <div className={styles.visa}></div>
            <div className={styles.mastercard}></div>
            <div className={styles.maestro}></div>
          </div>
        </div>
        <div className={styles.discribe}>
          <div className={styles.title}>Lorem Ipsum</div>
          <div className={styles.discrebe}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            nisl tincidunt eget nullam non nisi est sit amet. Vulputate odio ut
            enim blandit volutpat maecenas volutpat. Massa tincidunt dui ut
            ornare lectus sit. Quam elementum pulvinar etiam non.
          </div>
        </div>
        <div className={styles.contacts}>
          <div className={styles.title}>Contacts</div>
          <div className={styles.discrebe}>
            London <br />
            26985 Brighton Lane, Lake Forest, CA 92630 <br />
            +1 (949) 354-2574
          </div>
          <div className={styles.discrebe}>
            Paris
            <br /> 9 Doe Crossing Court <br />
            +11 281-762-2687
          </div>
        </div>
      </div>
      <div className={styles.created}>
        <div className={styles.text}>2023-2024 All right reserved</div>
        <div className={styles.text}>
          Site is deceloped by <a href="https://github.com/Sanvinganza">ME</a>
        </div>
      </div>
    </div>
  );
}
