import React from 'react';
import styles from './style.module.css';
import modulePhoto from '../../images/preproduction.png';

const PreproductionModule = () => {
    return (
        <div className={styles.container}>
            <div className={styles.photo}>
                <img src={modulePhoto} alt="photo"/>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>
                    Модуль препродакшн
                </h3>

                <div className={styles.subtitle}>
                    Крупнейшая в Украине кастинг-база (20 000+ <br/>
                    актеров) и модуль препродакшн позволяют <br/>
                    автоматизировать процессы подбора актеров на<br/>
                    роли, хранения и систематизации видеопроб <br/>
                    проекта, а также осуществлять подбор локаций<br/>
                    и вести работу с версиями сценариев.<br/>
                </div>

                <a href="#" className={styles.redButton}>
                    Подробнее
                </a>
            </div>
        </div>
    )
}

export default PreproductionModule;