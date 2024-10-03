import React from 'react';
import styles from './style.module.css'
import logo from '../../images/logo.jpg';  // Путь должен быть относительно файла Doctoolz.jsx

const Header = () => {
    return (
        <header className={`${styles.header} ${styles.container}`}>
            <img src={logo} alt="Logo"/>
            <div className={styles.navs}>
                <a href="#" className={styles.nav}>
                    О нас
                </a>
                <a href="#" className={styles.nav}>
                    FilmTools
                </a>
                <a href="#" className={styles.nav}>
                    DocTools
                </a>
                <a href="#" className={styles.nav}>
                    Услуги
                </a>
                <a href="#" className={styles.nav}>
                    Контакты
                </a>
            </div>
        </header>
    );
}

export default Header;