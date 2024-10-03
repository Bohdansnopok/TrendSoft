import React from 'react';
import styles from './style.module.css'
import smartTV from '../../images/smartTV.svg'
import eCommerce from '../../images/e-commerce.svg'
import bussines from '../../images/businessProcces.svg'
import mobile from '../../images/mobile.svg'

const CustomDevelopment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftContent}>
                <h2>
                    Заказная <br/>
                    разработка <br/>
                </h2>

                <div className={styles.subtitle}>
                    Трендсофт является <br/>
                    разработчиком решений для <br/>
                    SMART-TV (Samsung, LG и др) и <br/>
                    предлагает комплексные продукты <br/>
                    для запуска OTT- платформ. <br/>
                </div>

                <a href="#" className={styles.redButton}>
                    оставить заявку
                </a>
            </div>

            <div className={styles.rightContent}>
                <div className={styles.item}>
                    <img src={smartTV} alt=""/>
                    <div className={styles.item__title}>
                        Разработки <br/>
                        для SMART-TV
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={eCommerce} alt=""/>
                    <div className={styles.item__title}>
                        Решения <br/>
                        для E-Commerce <br/>
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={bussines} alt=""/>
                    <div className={styles.item__title}>
                        Автоматизация <br/>
                        бизнес-процессов <br/>
                    </div>

                </div>
                <div className={styles.item}>
                    <img src={mobile} alt=""/>
                    <div className={styles.item__title}>
                        Mobile <br/>
                        разработка <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomDevelopment;