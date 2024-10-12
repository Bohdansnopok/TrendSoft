// Spinner.jsx
import React from 'react';
import styles from './style.module.css'; // Імпортуйте ваш CSS для спінера

const Spinner = () => {
    return (
        <div className={styles.spinnerOverlay}>
            <div className={styles.spinner}>

            </div>
        </div>
    );
};

export default Spinner;