import next from 'next';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/JonathanFerraz.png" alt="Jonathan Ferraz" />
      <div>
        <strong>Jonathan Ferraz</strong>
        <p>
          <img src={'icons/level.svg'} alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
