import { ReactElement } from 'react';
import styled from 'styled-components';

const Technology = ({
  color,
  icon,
  payment,
  address,
  info,
}: {
  color: string;
  icon: ReactElement;
  payment: string;
  address: string;
  info: string;
}) => {
  return (
    <Container>
      <Head color={color}>{icon}</Head>

      <Column forceWidth={110}>
        <h5>Method</h5>
        <p>{payment}</p>
      </Column>
      <Column forceWidth={200}>
        <h5>Address</h5>
        <p>{address}</p>
      </Column>
      <Column noBorder>
        <h5>Additional Information</h5>
        <p>{info}</p>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  border: 1px solid #101010;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;

  @media (max-width: 850px) {
    flex-direction: column;
    height: auto;
  }

  &:hover {
    background-color: #101010;
  }
`;

const Head = styled.div<{ color: string }>`
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: #fff;
  background-color: ${({ color }) => color};
  flex-shrink: 0;

  @media (max-width: 850px) {
    height: 50px;
    width: 100%;
  }

  svg {
    height: 30px;
    width: 30px;
  }
`;

const Column = styled.div<{ forceWidth?: number; noBorder?: boolean }>`
  display: block;
  height: 100%;
  width: ${({ forceWidth }) => (forceWidth ? forceWidth + 'px' : 'fit-content')};
  min-width: ${({ forceWidth }) => (forceWidth ? forceWidth + 'px' : undefined)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid ${({ noBorder }) => (noBorder ? 'transparent' : '#101010')};
  padding: 1rem;
  box-sizing: border-box;
  flex-shrink: ${({ noBorder }) => (noBorder ? undefined : 0)};

  @media (max-width: 850px) {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid ${({ noBorder }) => (noBorder ? 'transparent' : '#101010')};
    padding: 1rem;
    flex-shrink: 0;
    box-sizing: content-box;
  }

  h5 {
    font-family: 'Courier New';
    margin: 0;
    color: #fff;
  }

  p {
    margin: 0;
    white-space: normal;
  }
`;

export default Technology;
