import React from "react";
import Contact from "./assets/components/Contact";
import Header from "./assets/components/Header";
import Innovation from "./assets/components/Innovation";
import Aboutus from "./assets/components/AboutUs";
import Service from "./assets/components/Service";
import Solutions from "./assets/components/Solutions";
import Success from "./assets/components/Success";
import Clients from "./assets/components/Clients";
import Stories from "./assets/components/Stories";
import Review from "./assets/components/Review";
import Footer from "./assets/components/Footer";

const Home = () => {
    return (
        <div>
            <Contact />
            <Header />
            <Innovation />
            <Aboutus />
            <Service />
            <Solutions />
            <Success />
            <Clients />
            <Stories />
            <Review />
            <Footer />
        </div>
    )
}
export default Home;