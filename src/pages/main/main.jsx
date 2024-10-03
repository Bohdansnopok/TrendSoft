import styles from './style.module.css';
import Header from "../../components/Header/Header";
import MainBlock from "../../components/MainBlock/MainBlock";
import ServiceCounter from "../../components/ServiceCounter/ServiceCounter";
import ModulePlan from "../../components/ModulesBlocks/ModulePlan";
import BudgetingModule from "../../components/ModulesBlocks/BudgetingModule";
import PreproductionModule from "../../components/ModulesBlocks/PreproductionModule";
import CastingCounter from "../../components/СastingCounter/CastingCounter";
import Doctoolz from "../../components/Doctoolz/Doctoolz";
import CustomDevelopment from "../../components/CustomDevelopment/CustomDevelopment";


const Main = () => {
    return (
        <div>
            <Header/>

            <MainBlock/>

            <ServiceCounter/>

            <ModulePlan/>

            <BudgetingModule/>

            <PreproductionModule/>

            <CastingCounter/>

            <Doctoolz/>

            <CustomDevelopment/>
        </div>
    )
};

export default Main;