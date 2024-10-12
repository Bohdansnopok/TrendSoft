import React from 'react';
import styles from './style.module.css'
import FilmToolz from '../../images/FilmToolz.jpg'
import Documents from  '../../images/documentsIcon.svg'
import Vizirovanie from  '../../images/vizirovanieIcon.svg'
import Save from  '../../images/saveIcon.svg'
import Archive from  '../../images/archiveIcon.svg'

const Doctoolz = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.doctoolz__title}>
                    Doctoolz.ru - облачное <br/>
                    решение по организации <br/>
                    документооборота <br/>
                </h2>

                <div className={styles.content}>
                    <img src={FilmToolz} alt="" className={styles.filmToolzPhoto}/>

                    <div className={styles.right}>
                        <h3>
                            Крупнейшая в России <br/>
                            кастинг-база <br/>
                        </h3>

                        <div className={styles.subtitle}>
                            Крупнейшая в России кастинг-база (20 000+ <br/>
                            актеров) и модуль препродакшн позволяют <br/>
                            автоматизировать процессы подбора актеров <br/>
                            на роли, хранения и систематизации <br/>
                            видеопроб проекта, а также осуществлять <br/>
                            подбор локаций и вести работу с версиями <br/>
                            сценариев. <br/>
                        </div>

                        <div className={styles.btnWrapper}>
                            <a href="#" className={styles.redButton}>
                                Подробнее
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Doctoolz;