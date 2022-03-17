import styled from 'styled-components'

export const Container = styled.div`
    grid-area: content-area;
    background-color: ${({ theme }) => theme.colors.background_900};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
