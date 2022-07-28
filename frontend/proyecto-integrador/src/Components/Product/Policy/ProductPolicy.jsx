import * as Styled from "./ProductPolicy.styled"
import {POLICY} from "./PolicyConfig";

export default function ProductPolicy({policy}) {

 const {child_policy, extra_bed, smoke_policy, noise_policy, only_cash} = policy

    let childToRender = child_policy.length <= 2 ? `A partir de los ${child_policy} años los niños abonan como adultos.` : child_policy

  return (
    <Styled.PolicyContainer>
      <Styled.Title>¿Qué tenés que saber?</Styled.Title>
      <hr />
      <Styled.MainDiv>
        <Styled.Policy>
          <Styled.Subtitle>Normas de la casa</Styled.Subtitle>
          <p><span>check-in : </span>{policy.check_in}</p>
          <p><span>check-out : </span>{policy.check_out}</p>
          <p>{childToRender}</p>
          <p>{extra_bed ? POLICY["extra_bed"] : ""}</p>
          <p>{smoke_policy ? POLICY["smoke_policy"] : ""}</p>
          <p>{noise_policy ? POLICY["noise_policy"] : ""}</p>
          <p>{only_cash ? POLICY["only_cash"] : ""}</p>
        </Styled.Policy>
        <Styled.Policy>
            <Styled.Subtitle>Salud y seguridad</Styled.Subtitle>
            <div>
                <p>{policy.security_and_health}</p>
            </div>
        </Styled.Policy>
        <Styled.Policy>
            <Styled.Subtitle>Política de cancelación</Styled.Subtitle>
            <div>
              <p>{policy.cancellation_policy}</p>
            </div>
        </Styled.Policy>
        </Styled.MainDiv>
    </Styled.PolicyContainer>
  );
}