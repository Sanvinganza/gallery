import { Button } from "../../components/Button/Button";
import styles from "./ArtPage.module.css";

export function ArtPage() {
  return (
    <div className={styles.container}>
      <img
        src={require("../../images/img_not_found.png")}
        alt=""
        className={styles.img}
      />
      <div className={styles.details}>
        <div className={styles.title}>Details</div>
        <div className={styles.items}>
          <div className={styles.item}>
            <Button apperance="ghost" className={styles.key}>
              Resolution
            </Button>
            <div className={styles.text}>3840x2310</div>
          </div>
          <div className={styles.item}>
            <Button apperance="ghost" className={styles.key}>
              Author
            </Button>
            <div className={styles.text}>Lorem Ipsum</div>
          </div>
          <div className={styles.item}>
            <Button apperance="ghost" className={styles.key}>
              ID
            </Button>
            <div className={styles.text}>00956</div>
          </div>
        </div>
      </div>
    </div>
  );
}
