import React from 'react';
import styles from './style.module.css';
import oneCounterIcon from '../../images/1-counterIcon.svg';
import twoCounterIcon from '../../images/2-counterIcon.svg';
import threeCounterIcon from '../../images/3-counterIcon.svg';
import useCounter from '../../helpers/hooks/useCounter'; // Импортируем хук

const ServiceCounter = () => {
    // Используем хук для анимации счетчиков
    const userCount = useCounter(20000);
    const projectCount = useCounter(10000);
    const yearCount = useCounter(8); // Если нужно, чтобы лет на рынке было 20

    return (
        <div className={styles.container}>
            <h2>
                <span>Filmtoolz.ru</span> - сервис <br/>
                автоматизации <br/>
                кинопроизводства <br/>
            </h2>

            <div className={styles.subtitle}>
                Созданный в 2015 году, он стал незаменимым инструментом в <br/>
                каждодневной работе сотен российских кинокомпаний и в настоящее время <br/>
                является стандартом работы для всей отрасли. <br/>
            </div>

            <div className={styles.counters}>
                <div className={styles.counter}>
                    <img src={oneCounterIcon} alt=""/>
                    <div className={styles.countNum}>
                        {userCount.toLocaleString()} + {/* Используем анимированное значение */}
                    </div>
                    <div className={styles.counter__subtitle}>
                        Пользователей
                    </div>
                </div>
                <div className={styles.counter}>
                    <img src={twoCounterIcon} alt=""/>
                    <div className={styles.countNum}>
                        {projectCount.toLocaleString()} + {/* Используем анимированное значение */}
                    </div>
                    <div className={styles.counter__subtitle}>
                        Проектов
                    </div>
                </div>
                <div className={styles.counter}>
                    <img src={threeCounterIcon} alt=""/>
                    <div className={styles.countNum}>
                        {yearCount.toLocaleString()} + {/* Используем анимированное значение */}
                    </div>
                    <div className={styles.counter__subtitle}>
                        Лет на рынке
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceCounter;