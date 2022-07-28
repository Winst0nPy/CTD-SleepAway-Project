import styled from "styled-components";
const MenuButton = ({open,handleClick}) => {
    return !open ? (
        <MenuButtonWrapper onClick={handleClick}>
            <svg viewBox="0 0 90 80" width="30" height="30" fill="var(--contrast--color)">
            <rect width="90" height="10"/>
            <rect y="20" width="90" height="10"/>
            <rect y="40" width="90" height="10"/>
            </svg>
        </MenuButtonWrapper>
    ) : (
        <MenuButtonWrapper onClick={handleClick}>
            <svg className="svg-icon" viewBox="0 0 20 20" width="30" height="30" fill="var(--contrast--light)">
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
            </svg>
        </MenuButtonWrapper>
    );
}
const MenuButtonWrapper = styled.button`
border: none;
background: none;
margin-top: 1.3rem;
margin-right: 1rem;
z-index: 600;
cursor: pointer;
.svg-icon {
    width: 20px;
    position: absolute;
    left: 1rem;
    top: 1rem;
}
@media only screen and (min-width: 768px) {
    display: none;
  }
`;
export default MenuButton;