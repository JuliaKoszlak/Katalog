import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Header";

const Title = "Katalog ";
const Subtitle = "Aplikacja Julii Koszlak";

const HomePage = () => {

    return (
        <Container>
            <Header title={Title} subtitle={Subtitle} />
        </Container>
    );
};

export default HomePage;