import React from 'react';
import styles from './style.module.css'
import mainPhoto from '../../images/mainPhoto.png';

const MainBlock = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <h1 className={styles.main__title}>
                        IT решения <br/>
                        для кино-бизнеса <br/>
                        и не только <br/>
                    </h1>

                    <div className={styles.subtitle}>
                        ООО “ТРЕНД-СОФТ” - созданная в 2014 году IT-компания, <br/>
                        занимающаяся разработкой собственных сервисов для <br/>
                        медиа-индустрии: <br/>
                        <br/>
                        FilmToolz.ru - автоматизация кинопроизводства и малого <br/>
                        бизнеса (DocToolz.ru - автоматизация документооборота), а <br/>
                        также осуществляющей разработку программного <br/>
                        обеспечения под заказ. <br/>
                    </div>
                </div>

                <div className={styles.rightContent}>
                    <img src={mainPhoto} alt="main"/>
                </div>


            </div>
        </div>
    )
}

export default MainBlock;