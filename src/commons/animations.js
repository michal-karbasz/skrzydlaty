import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
    100% {
        opacity: 1;
    }
    `;

export const run = keyframes`
    100% {
        background-position: 928px;
    }
`;

export const move = keyframes`
    100% {
        transform: translate(100vw);
    }
`;
