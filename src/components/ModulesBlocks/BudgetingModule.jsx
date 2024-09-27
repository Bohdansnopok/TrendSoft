import React from 'react';
import styles from './style.module.css';
import modulePhoto from '../../images/budget.png';

const BudgetingModule = () => {
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
                    Модуль бюджетирования предназначен для <br/>
                    работы над бюджетом проекта и последующего<br/>
                    учета фактических затрат кинопроизводства.<br/>
                    FilmToolz позволяет быстро сформировать <br/>
                    смету по типовому шаблону или создать <br/>
                    собственный.<br/>

                </div>

                <a href="#" className={styles.redButton}>
                    Подробнее
                </a>
            </div>
        </div>
    )
}

export default BudgetingModule;