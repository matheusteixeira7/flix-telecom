import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 20px 20px;
    grid-template-areas:
        'top-card-1 top-card-2 top-card-3 top-card-4'
        'main-card main-card main-card aside-card-1'
        'main-card main-card main-card aside-card-1'
        'main-card main-card main-card aside-card-2'
        'secondary-card secondary-card secondary-card aside-card-2'
        'secondary-card secondary-card secondary-card aside-card-2';

    height: 100%;

    max-width: ${({ theme }) => theme.breakpoints.laptopL};
`
