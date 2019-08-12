import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../../commons/config';
import { AppContext } from '../../../appContext';

import coronet from '../../../assets/wieniec.jpeg';

const IconText = styled.span`
    font-size: 18px;
    transition: color 0.5s;
    opacity: 0;
    color: ${props =>
        props.activeLink === props.children ? colors.complementary : colors.primary};

    @keyframes fadeIn {
        100% {
            opacity: 1;
        }
    }
    animation: fadeIn 3s ${props => props.pop} forwards;
`;

const StyledCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    :hover ${IconText} {
        color: ${colors.complementary};
    }
`;

const Coronet = styled.div`
    background: url(${coronet}) center;
    background-size: contain;
    background-repeat: no-repeat;
    min-width: ${props => (props.big ? '190px' : '160px')};
    min-height: ${props => (props.big ? '150px' : '120px')};
    position: relative;
    opacity: 0;
    transition: 0.5s;
    cursor: pointer;
    :hover {
        transform: scale(1.1);
    }

    @keyframes fadeIn {
        100% {
            opacity: 1;
        }
    }
    animation: fadeIn 3s ${props => props.pop} forwards;
`;

const Icon = styled.img`
    width: ${props => (props.big ? '70px' : '50px')};
    height: ${props => (props.big ? '70px' : '50px')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const MenuItem = props => {
    const [_, setState] = useContext(AppContext);

    return (
        <Link
            to={`/${props.name}`}
            onClick={() => setState(state => ({ ...state, activeLink: props.name }))}
        >
            <StyledCol>
                <Coronet big={props.big} pop={props.pop}>
                    <Icon big={props.big} src={props.icon} />
                </Coronet>
                <IconText activeLink={props.activeLink} pop={props.pop}>
                    {props.name}
                </IconText>
            </StyledCol>
        </Link>
    );
};
