import styles from "./GalleryImg.module.scss";

export default function GalleryImg({ children, bg }) {
  return (
    <div
      className={styles.galleryimg}
      style={{
        background: `linear-gradient(rgba(54, 54, 54, 0.327), rgba(49, 49, 49, 0.3)), URL(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.comment}>
        <p>{children}</p>
      </div>
    </div>
  );
}
