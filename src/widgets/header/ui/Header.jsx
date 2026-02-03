import styles from "./Header.module.css";

export const Header = ({ title, children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </header>
  );
};
