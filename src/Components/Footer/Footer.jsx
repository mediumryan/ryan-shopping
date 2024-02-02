import { styled } from 'styled-components';

const FooterWrapper = styled.footer`
    width: 50%;
    color: var(--white-200);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    line-height: 1.2;
    letter-spacing: 0.5px;
    padding: 2rem 0;
    border-top: 2px solid var(--black-200);
    cursor: default;
    @media only screen and (min-width: 320px) and (max-width: 768px) {
        width: 75%;
        padding-bottom: 5rem;
    }
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <p>
                COPYRIGHT ⓒ d'Arles ALL RIGHT RESERVED. Designed by DFLOOR.CO.KR
                & Ryan Lee
            </p>
        </FooterWrapper>
    );
}
