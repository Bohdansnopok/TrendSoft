import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainBlock from "../../components/MainBlock/MainBlock";
import ServiceCounter from "../../components/ServiceCounter/ServiceCounter";
import Modules from "../../components/ModulesBlocks/Modules/Modules";
import CastingCounter from "../../components/СastingCounter/CastingCounter";
import Doctoolz from "../../components/Doctoolz/Doctoolz";
import CustomDevelopment from "../../components/CustomDevelopment/CustomDevelopment";


const Main = () => {
    return (
        <div>
            <Header/>
            <MainBlock/>
            <ServiceCounter/>
            <Modules/>
            <CastingCounter/>
            <Doctoolz/>
            <CustomDevelopment/>
            <Footer/>
        </div>
    )
};

export default Main;