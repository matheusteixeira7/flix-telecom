import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.2fr 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 20px 20px;
    grid-template-areas:
        'title title title title'
        'top-card-1 top-card-2 top-card-3 top-card-4'
        'main-card main-card main-card aside-card-1'
        'main-card main-card main-card aside-card-1'
        'main-card main-card main-card aside-card-2'
        'secondary-card secondary-card secondary-card aside-card-2'
        'secondary-card secondary-card secondary-card aside-card-2';

    max-width: ${({ theme }) => theme.breakpoints.laptopL};

    padding: 1.25rem;
`
