import { Container } from "react-bootstrap";
import About from "../../Components/About/About";
import Banner from "../../Components/AboutUs/Banner";
import WeHelp from "../../Components/AboutUs/We-Help/WeHelp";
import Services from "../../Components/AboutUs/services/Services";
import Drives from "../../Components/AboutUs/Drives/Drives";
import WhyPlutohub from "../../Components/AboutUs/why/WhyPlutohub";
import IndustriesServe from "../../Components/AboutUs/IndustriesServe/IndustriesServe";
import Team from "../../Components/AboutUs/Team/Team";


const AboutUs = () => {
    return (
        <section className="about">
            <Banner/>
            <WeHelp/>
            <Services/>
            <Drives/>
            <WhyPlutohub/>
            <IndustriesServe/>
            <Team/>
        </section>
    );
};

export default AboutUs;