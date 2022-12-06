import styled from "styled-components";
import arrow from "../images/icon-arrow-down.svg";

interface Props {
  handleClick: (accordionNumber: number) => void;
  activeAccordionNumber: number | null;
  itemNumber: number;
  title: string;
  content: string;
}

type ArrowTitleProps = {
  activeAccordionNumber: number | null;
  itemNumber: number;
};

export default function AccordionItem(props: Props) {
  const { handleClick, activeAccordionNumber, itemNumber, title, content } =
    props;

  return (
    <AccordionItemContainer onClick={() => handleClick(itemNumber)}>
      <TitleContainer>
        <Title
          activeAccordionNumber={activeAccordionNumber}
          itemNumber={itemNumber}
        >
          {title}
        </Title>
        <Arrow
          activeAccordionNumber={activeAccordionNumber}
          itemNumber={itemNumber}
        />
      </TitleContainer>

      {activeAccordionNumber === itemNumber ? (
        <Content>{content}</Content>
      ) : null}
      <Line />
    </AccordionItemContainer>
  );
}

const AccordionItemContainer = styled.div`
  cursor: pointer;
  @media (min-width: 900px) {
    width: 350px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div<ArrowTitleProps>`
  font-weight: ${(props) =>
    props.activeAccordionNumber === props.itemNumber ? "700" : "400"};
  cursor: pointer;
  &:hover {
    color: #f47b56;
  }
`;

const Arrow = styled.div<ArrowTitleProps>`
  background-image: url(${arrow});
  transform: rotate(
    ${(props) =>
      props.activeAccordionNumber === props.itemNumber ? "180deg" : "0deg"}
  );
  background-repeat: no-repeat;
  background-size: contain;
  width: 10px;
  height: 10px;
  margin-left: 20px;
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin: 13px 0 16px 0;
`;

const Line = styled.div`
  background: #e8e8ea;
  width: 100%;
  height: 1px;
  margin-bottom: 20px;
`;
