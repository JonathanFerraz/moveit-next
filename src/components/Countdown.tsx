import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(
    CountdownContext,
  );

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      <div className={styles.contdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled className={styles.countdownButton}>
          Ciclo encerrado
          <img style={{ marginLeft: '1rem' }} src={'icons/success.svg'} alt="Sucesso" />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type={'button'}
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}>
              Abandonar ciclo
              <img style={{ marginLeft: '1rem' }} src={'icons/finished.svg'} alt="Encerrar" />
            </button>
          ) : (
            <button type={'button'} className={styles.countdownButton} onClick={startCountdown}>
              Iniciar um ciclo
              <img style={{ marginLeft: '1rem', fill: '#fff' }} src={'icons/play.svg'} alt="Play" />
            </button>
          )}
        </>
      )}
    </>
  );
}
