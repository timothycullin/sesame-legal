// components/ivotips/TipPageWrapper.js
import styles from './TipPageWrapper.module.css';

export default function TipPageWrapper({ children }) {
    return <div className={styles['tip-page-bg']}>{children}</div>;
}
