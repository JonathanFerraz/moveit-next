import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 XP</header>
          <main>
            <img src="icons/body.svg" alt="Body" />
            <strong>Exercite-se</strong>
            <p>
              É agora Jonathan, bora lá meu parça. Caminhe por 3 minutos e estique suas pernas pra
              você ficar saudável.
            </p>
            <footer>
              <button type="button" className={styles.challengeFailButton}>
                Falhei
              </button>
              <button type="button" className={styles.challengeSucceededButton}>
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
