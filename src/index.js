import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Подключение стилей, если они есть
import App from './App';  // Импорт основного компонента приложения

ReactDOM.render(
    <React.StrictMode>
        <App />  {/* Основной компонент приложения */}
    </React.StrictMode>,
    document.getElementById('root')  // Привязка к div с id "root" в index.html
);