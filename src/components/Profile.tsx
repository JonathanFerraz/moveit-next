import next from 'next';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/JonathanFerraz.png" alt="Jonathan Ferraz" />
      <div>
        <strong>Jonathan Ferraz</strong>
        <p>
          <img src={'icons/level.svg'} alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
