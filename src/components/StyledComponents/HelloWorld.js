import React from 'react';
import styled from 'styled-components';
export default function HelloWorld() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;
  const Header = styled.span`
    font-size: 2rem;
    text-align: left;
    color: black;
  `;
  const Button = styled.button`
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  `;
  // style any component manually
  const Link = ({ className, children }) => <a className={className}>{children}</a>;

  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `;
  const link1 = ({ className, children }) => <a className={className}>{children}</a>;
  const NewLink = styled(link1)`
    color: black;
    font-weight: bold;
  `;
  return (
    <div>
      <Wrapper>
        <Title>Styled Components</Title>
        <Header>I am zeeshan</Header>
        <Button>Submit</Button>
        <TomatoButton>Override Button style</TomatoButton>
        <StyledLink>About</StyledLink>
        <NewLink>Home</NewLink>
      </Wrapper>
    </div>
  );
}
