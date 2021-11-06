import React from "react";

import { Container } from "./LayoutStyles";

export default function Layout ({ children }) {
    return (
        <Container>
            <main>
                {children}
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus doloremque mollitia praesentium in numquam hic, sapiente quam blanditiis aliquid aliquam quaerat officia, totam neque iste quos, cumque eos veritatis.
                </p>
            </main>
        </Container>
    )
}