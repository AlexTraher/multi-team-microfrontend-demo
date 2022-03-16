import styled from "styled-components";

declare const version: string;

const Section = styled.section`
  background-color: #22cdf3;
  color: white;
  flex: 1 1 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 30px;
  text-align: center;
`;

export default function Root(props) {
  return <Section>product details micro frontend ({version})</Section>;
}

export function RootBeta(props) {
  return <Section>product details micro frontend ({version})</Section>;
}
