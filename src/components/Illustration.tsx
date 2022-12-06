import styled from "styled-components";

import mobileBackgroundPattern from "../images/bg-pattern-mobile.svg";
import desktopBackgroundPattern from "../images/bg-pattern-desktop.svg";
import mobileWomanImage from "../images/illustration-woman-online-mobile.svg";

export default function Illustration() {
  return (
    <IllustrationContainer>
      <BackgroundPattern />
      <WomanIllustration />
    </IllustrationContainer>
  );
}

const IllustrationContainer = styled.div`
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -140px;
`;

const BackgroundPattern = styled.div`
  background: url(${mobileBackgroundPattern});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 240px;
  height: 145px;
  margin-bottom: -80px;
  margin-right: -220px;
  @media (min-width: 900px) {
    background-image: url(${desktopBackgroundPattern});
    width: 800px;
    height: 700px;
    margin-bottom: -50px;
    margin-left: -400px;
  }
`;

const WomanIllustration = styled.div`
  background-image: url(${mobileWomanImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 240px;
  height: 180px;
  margin-top: -50px;
  margin-left: -20px;
  @media (min-width: 900px) {
    width: 380px;
    height: 400px;
    margin-bottom: -150px;
    margin-left: -200px;
  }
`;
