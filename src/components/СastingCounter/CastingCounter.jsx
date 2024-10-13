import React from 'react';
import useCounter from '../../helpers/hooks/useCounter';
import styles from "../СastingCounter/style.module.css";
import CastingPhoto from  "../../images/castingPhoto.png"

const CastingCounter = () => {
    const Actors = useCounter(20000);
    const Videos = useCounter(30000);
    const Photos = useCounter(250000);

    return (
        <div className={styles.container}>
            <h2>
                Кастинг-база
            </h2>

            <div className={styles.subtitle}>
                Крупнейшая в Украине кастинг-база (20 000+ актеров) и модуль <br/>
                препродакшн позволяют автоматизировать процессы подбора актеров <br/>
                на роли, хранения и систематизации видеопроб проекта, а также <br/>
                осуществлять подбор локаций и вести работу с версиями сценариев. <br/>
            </div>

            <div className={styles.counters}>
                <div className={styles.counter}>
                    <div className={styles.countNum}>
                        {Actors.toLocaleString()} + {}
                    </div>
                    <div className={styles.counter__subtitle}>
                        Актеров
                    </div>
                </div>

                <div className={styles.counter}>
                    <div className={styles.countNum}>
                        {Videos.toLocaleString()} + {}
                    </div>
                    <div className={styles.counter__subtitle}>
                        Видео
                    </div>
                </div>

                <div className={styles.counter}>
                    <div className={styles.countNum}>
                        {Photos.toLocaleString()} + {}
                    </div>
                    <div className={styles.counter__subtitle}>
                        Фото
                    </div>
                </div>
            </div>

            <div className={styles.btnWrapper}>
                <a href="#" className={styles.redButton}>
                    Подробнее
                </a>
            </div>

            <img src={CastingPhoto} alt="" className={styles.castingPhoto}/>
        </div>
    );
}

export default CastingCounter;