import React from "react";
import Header from "../components/Header/Header";

import { Container } from "./LayoutStyles";

export default function Layout ({ children }) {
    return (
        <Container>
            <Header />
            <main>
                {children}
            </main>
        </Container>
    )
}