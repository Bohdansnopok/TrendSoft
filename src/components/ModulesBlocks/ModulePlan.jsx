import React from 'react';
import styles from './style.module.css';
import modulePhoto from '../../images/modulePlanImg.jpg';

const ModulePlan = () => {
    return (
        <div className={styles.container}>
            <div className={styles.photo}>
                <img src={modulePhoto} alt="photo"/>
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>
                    Модуль бюджетирования
                </h3>

                <div className={styles.subtitle}>
                    FilmToolz позволяет систематизировать <br/>
                    планирование съемок, автоматически <br/>
                    формировать и настраивать всю необходимую в <br/>
                    процессе съемок документацию, предоставляет <br/>
                    широкий спектр производственных отчетов и <br/>
                    дает возможность организовать командную <br/>
                    работу над проектом в режиме онлайн. <br/>
                </div>

                <a href="#" className={styles.redButton}>
                    Подробнее
                </a>
            </div>
        </div>
    )
}

export default ModulePlan;