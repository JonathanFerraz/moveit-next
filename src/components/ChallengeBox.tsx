import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFail() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} XP</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
            <strong>Exercite-se</strong>
            <p>{activeChallenge.description}</p>
            <footer>
              <button
                type="button"
                className={styles.challengeFailButton}
                onClick={handleChallengeFail}>
                Falhei
              </button>
              <button
                type="button"
                className={styles.challengeSucceededButton}
                onClick={handleChallengeSucceeded}>
                Completei
              </button>
            </footer>
          </main>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Inicie um ciclo <br />
            para receber desafios a <br /> serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level UP" />
            Complete-os e ganhe <br /> experiência e avance de level.
          </p>
        </div>
      )}
    </div>
  );
}
