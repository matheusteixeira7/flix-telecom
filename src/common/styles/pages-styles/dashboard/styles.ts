import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-columns: 16rem 1fr;
    grid-template-rows: 5rem auto;
    gap: 0px 0px;
    grid-template-areas:
        'aside topnav'
        'aside content-area';
`
