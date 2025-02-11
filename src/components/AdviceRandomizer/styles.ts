import styled from "@emotion/styled";

export const AdviceRandomizerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding: 30px;
width: 800px;
min-height: 500px;
background-color: aliceblue;
border: 2px solid #6da9f3;
border-radius: 8px;
`
export const ButtonContainer = styled.div`
width: 100%;
`

export const ResultsContainer = styled.ul`
width: 100%;
min-height: 300px;
max-height: fit-content;
background-color: white;
border: 2px solid #6da9f3;
border-radius: 8px;
font-size: 20px;
color: black;
`

export const ResultItem = styled.li`
text-decoration: none;
`

export const ErrorContainer = styled.p`
color: red;
font-size: 24px;
`
