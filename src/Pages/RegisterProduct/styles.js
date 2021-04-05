import styled from "styled-components";
import { Container } from "../../globalStyles";

export const ContainerRegister = styled(Container)`
    margin-top: 40px;
    display: flex;
    flex-flow: column nowrap;
    width: 400px;
    & input {
        border: 1px solid #ccc;
        padding: 6px;
        margin: 8px 0;
    }
    & select {
        border: 1px solid #ccc;
        padding: 6px;
    }
    & label {
        margin-top: 10px;
    }
    & textarea {
        margin-bottom: 10px;
    }
    & button {
        margin: 0 auto;
        font-weight: 700;
        color: #fff;
        width: 250px;
        margin-top: 40px;
        padding: 10px 0;
        background: linear-gradient(90deg,rgba(236,30,13,1) 0%,rgba(215,57,39,1) 50%,rgba(215,57,39,1) 100%);
        border: 0;
    }
    ${Container}
`
export const Name = styled.input`

`

export const Description = styled.input`

`
export const Price = styled.input`

`
export const PaymentMethod = styled.input`

`
export const Category= styled.select`

`
export const Photos = styled.input`

`

export const Installments = styled.input`

`