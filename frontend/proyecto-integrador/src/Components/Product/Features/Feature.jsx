import * as Styled from "./Feature.styled"
import handleIcons from "../../../Utils/handleIcons";

export default function Feature({features}) {
  const ICON_SIZE = 35
  return (
    <>
      <Styled.Title>¿Qué ofrece el lugar?</Styled.Title>
      <hr />
      <Styled.IconContainer>
          {handleIcons(features, ICON_SIZE, true)}
      </Styled.IconContainer>
    </>
  );
};


