import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Components/Header.js";

const headerTitle = "Katalog giereczkowy";
const headerSubtitle = "Aplikacja Julii Koszlak";

const HomePage = () => {
    return (
    <>
        <Container>
            <Header title={headerTitle} subtitle={headerSubtitle} />
        </Container>
    </>
    );
};

export default HomePage;