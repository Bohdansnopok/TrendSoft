import styles from './style.module.css';
import Header from "../../components/Header/Header";
import MainBlock from "../../components/MainBlock/MainBlock";
import ServiceCounter from "../../components/ServiceCounter/ServiceCounter";

const Main = () => {
    return (
        <div>
            <Header/>

            <MainBlock/>

            <ServiceCounter/>
        </div>
    )
};

export default Main;