import styled from 'styled-components'

export const Container = styled.div`
    grid-area: topnav;
    background-color: ${({ theme }) => theme.colors.background_800};

    padding: 20px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
`
