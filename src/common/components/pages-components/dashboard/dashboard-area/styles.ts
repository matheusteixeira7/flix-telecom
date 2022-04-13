import styled from 'styled-components'

export const Container = styled.div`
    grid-area: content-area;
    background-color: ${({ theme }) => theme.colors.background_900};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow: auto;
`

export const Content = styled.div`
    overflow: auto;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`
