import React from 'react';
import styles from './style.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftContent}>
                <h2>
                    Остались вопросы?
                </h2>

                <div className={styles.email}>
                    Свяжитесь с нами:
                    <a href="mailto:mailsnopokbogdan3@gmail.com">
                        order@trendsoft.ru
                    </a>
                </div>
            </div>

            <div className={styles.rightContent}>
                <h2>
                    Контакты
                </h2>

                <a href="tel:+380123456789" className={styles.number}>+380123456789</a>

                <a target={'_blank'} href="https://www.google.com.ua/maps/place/%D0%BF%D1%80-%D1%82.+%D0%A1%D1%82%D0%B5%D0%BF%D0%B0%D0%BD%D0%B0+%D0%91%D0%B0%D0%BD%D0%B4%D0%B5%D1%80%D1%8B,+24,+%D0%9A%D0%B8%D0%B5%D0%B2,+%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+04073/@50.4874645,30.5092549,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4ce0172854c31:0xb1b92c6e8b873f24!8m2!3d50.4874611!4d30.5118298!16s%2Fg%2F11fncsr4h1?hl=ru&entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D" className={styles.adress}>
                    Киев Бандеры 24, стр. 2
                </a>
            </div>
        </div>
    );
}

export default Footer;