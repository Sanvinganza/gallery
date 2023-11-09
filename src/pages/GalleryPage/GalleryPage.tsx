import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./GalleryPage.module.css";

export function GalleryPage() {
  return (
    <>
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
        <div className={styles.logo_container}>
          <div className={styles.logo_img1}>
            <div className={styles.logo_img2}></div>
          </div>
        </div>
      </div>

      <div className={styles.images_title}>all images</div>
      <div className={styles.images_main}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((el) => (
          <Link key={el} to={`${el}`}>
            <img
              src={require("../../images/img_not_found.png")}
              alt=""
              className={styles.card}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
