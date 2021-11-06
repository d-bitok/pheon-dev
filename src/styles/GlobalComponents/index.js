import styled from "styled-components";

// Section Components Styling
export const Section = styled.section`
    display: ${(props) => props.grid ? "grid" : "flex"};
    flex-direction: ${(props) => props.row ? "row" : "column"};
    margin: 0 auto;
    max-width: 1040px;
    box-sizing: content-box;
    position: relative;
    overflow: hidden;
    grid-template-columns: 1fr 1fr;

`;