import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors, breakpoints } from '../../../commons/config';
import { AppContext } from '../../../appContext';

import coronet from '../../../assets/wieniec.jpeg';

const IconText = styled.span`
    font-size: 17px;
    transition: color 0.5s;
    opacity: 0;
    padding: 5px 15px;
    color: ${props =>
        props.activeLink === props.children ? colors.complementary : colors.primary};
    margin-bottom: 5px;
    @keyframes fadeIn {
        100% {
            opacity: 1;
        }
    }
    animation: fadeIn 3s ${props => props.pop} forwards;
    ${breakpoints.md} {
        font-size: 14px;
    }
`;

const StyledCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    :hover ${IconText} {
        color: ${colors.complementary};
    }
`;

const Coronet = styled.div`
    background: url(${coronet}) center;
    background-size: contain;
    background-repeat: no-repeat;
    min-width: ${props => (props.big ? '24vh' : '20vh')};
    min-height: ${props => (props.big ? '16vh' : '14vh')};
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
    width: ${props => (props.big ? '8vh' : '7vh')};
    height: ${props => (props.big ? '8vh' : '7vh')};
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
