import styles from "./MainStatus.module.scss";

const data = [
  { amount: "1000+", title: "Foydalanuvchilar soni" },
  { amount: "27", title: "Davlatlar soni" },
  { amount: "107", title: "Hodimlar soni" },
  { amount: "50", title: "Transportlar soni" },
  { amount: "22", title: "Ishlatiladigan App soni" },
];

export default function MainStatus() {
  return (
    <div className={styles.status}>
      {data.map((data) => {
        return (
          <div key={data.title} className={styles.statusElement}>
            <p className={styles.amount}>{data.amount}</p>
            <p className={styles.title}>{data.title}</p>
          </div>
        );
      })}
    </div>
  );
}
