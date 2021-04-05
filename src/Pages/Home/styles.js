import styled from "styled-components";
import { Container } from "../../globalStyles";

export const HomeContainer = styled(Container)`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin-bottom: 80px;
    ${Container}
`
export const FilterContainer = styled(Container)`
    display: flex;
    & ul {
        border-bottom: 1px solid #ddd;
        margin: 20px auto;
        display: flex;
        flex-flow: row nowrap;

    }
    & ul li {
        cursor: pointer;
        position: relative;
        padding: 10px 20px;
    }
    & ul li:hover::before {
        width: 100%;
        background: rgba(236,30,13,1);
        transition: all 0.3s ease;
    }
    & ul li::before {
        display: block;
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        height: 4px;
        width: 0%;
    }
    ${Container}
`