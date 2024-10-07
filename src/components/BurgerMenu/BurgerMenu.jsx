import React, { useState } from 'react';
import styles from './style.module.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Переключение состояния меню
    };

    return (
        <div className={styles.burgerMenu}>
            {/* Иконка бургер-меню */}
            <div className={`${styles.burgerIcon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Затемнение фона при открытии меню */}
            {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}

            {/* Мобильное меню */}
            <nav className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
                <ul>
                    <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                    <li><a href="#about" onClick={toggleMenu}>About</a></li>
                    <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default BurgerMenu;
