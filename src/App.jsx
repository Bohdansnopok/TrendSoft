import React, { useEffect, useState } from "react";
import Main from './pages/main/main';
import Spinner from '../src/components/Spinner/Spinner'; // Імпортуйте спінер

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            // Імітація завантаження даних
            setTimeout(() => {
                setIsLoading(false); // Завантаження завершено через 2 секунди
            }, 700);
        };

        fetchData();
    }, []);

    return (
        <div>
            {isLoading ? (
                <Spinner/> // Показуємо спінер, якщо завантажується
            ) : (
                <Main /> // Показуємо компонент Main після завершення завантаження
            )}
        </div>
    );
}

export default App;
