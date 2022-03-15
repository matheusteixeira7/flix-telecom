import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
    height: 50px;
    width: 50px;
    background-color: ${({ theme }) => theme.colors.background_700};
    border-radius: 50%;

    margin-right: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
        background-color: ${(props) =>
            lighten(0.05, props.theme.colors.background_700)};
    }
`

export const Icon = styled.span`
    font-size: 1.5rem;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.warning};

    transition: all 0.2s ease-in-out;

    :hover {
        color: ${(props) => lighten(0.05, props.theme.colors.warning)};
    }
`
