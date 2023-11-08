import { Button } from "../../components/Button/Button";
import styles from "./GalleryPage.module.css";

export function GalleryPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>lorem</div>
        <div className={styles.info}>
          <div className={styles.username}>username</div>
          <div className={styles.logout}>logout</div>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.info}>
          <div className={styles.title}>Lorem ipsum dolor sit amet</div>
          <div className={styles.discribe}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </div>
          <Button apperance="primary" className={styles.button}>
            to picture
          </Button>
        </div>
        <div className={styles.imgs}>
          <div className={styles.img1}>
            <div className={styles.img2}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
