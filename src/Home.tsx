import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <img src="logo.png" className={styles.logo} alt="logo" />
      <a className={styles.link} href="/iframe">
        Open HEMS
      </a>
    </div>
  );
}

export default Home;
