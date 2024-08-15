import Spinner from 'react-bootstrap/Spinner';
import styles from './ProductPage.module.css'; // Import your CSS module

export function LoadingSpinner() {
  return (
    <div className={styles.spinnerContainer}>
      <Spinner animation="grow" variant="primary" className={styles.spinner} />
    </div>
  );
}


