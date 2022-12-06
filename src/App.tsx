import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import AccordionItem from "./components/AccordionItem";
import { DATA } from "./components/data";
import Illustration from "./components/Illustration";

export default function App() {
  const [activeAccordionNumber, setActiveAccordionNumber] = useState<
    number | null
  >(null);

  const handleClick = (accordionNumber: number) => {
    if (activeAccordionNumber === accordionNumber) {
      setActiveAccordionNumber(null);
    } else {
      setActiveAccordionNumber(accordionNumber);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Main>
        <Illustration />
        <div>
          <Title>FAQ</Title>
          {DATA.map((item) => (
            <AccordionItem
              activeAccordionNumber={activeAccordionNumber}
              handleClick={handleClick}
              itemNumber={item.itemNumber}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </Main>
    </>
  );
}

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
  }

  body {
    background: linear-gradient(180deg, #B068E9 0%, #6463E7 100%);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #4B4C5F;
    @media (min-width: 900px) {
      width: 100vw;
      height: 100vh;
    }
  }
`;

const Main = styled.div`
  background: white;
  width: 375px;
  border-radius: 23px;
  padding: 48px 25px;
  margin-top: 120px;
  margin-bottom: 50px;
  @media (min-width: 900px) {
    width: 850px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px;
    padding: 40px;
    overflow: hidden;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #1e1f36;
  text-align: center;
  margin-bottom: 40px;
`;
