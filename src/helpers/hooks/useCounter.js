// useCounter.js
import { useEffect, useState } from 'react';

const useCounter = (targetNumber, duration = 2000, incrementTime = 40) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const totalSteps = duration / incrementTime; // Общее количество шагов
        const increment = Math.ceil(targetNumber / totalSteps); // Увеличение за шаг

        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount + increment >= targetNumber) {
                    clearInterval(interval);
                    return targetNumber; // Устанавливаем конечное значение
                }
                return prevCount + increment;
            });
        }, incrementTime);

        return () => clearInterval(interval); // Очистка интервала при размонтировании
    }, [targetNumber, duration, incrementTime]);

    return count;
};

export default useCounter;
