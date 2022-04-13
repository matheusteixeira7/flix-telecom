import styled from 'styled-components'

interface IDotProps {
    color: 'green' | 'purple' | 'blue' | 'yellow'
}

export const Container = styled.div`
    grid-area: aside-card-1;
    background-color: ${({ theme }) => theme.colors.blue};

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-radius: 10px;
`
export const Chart = styled.div`
    display: flex;
    align-items: flex-end;

    width: 100%;
    height: 100%;
`

export const Header = styled.header`
    width: 100%;
    padding: 1.25rem;

    display: flex;
    justify-content: space-between;

    margin-bottom: 1.25rem;
`

export const NewClientWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Title = styled.span`
    font-size: ${({ theme }) => theme.fontSize.text_base};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.white};
`

export const Average = styled.span`
    font-size: ${({ theme }) => theme.fontSize.text_xs};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.white};
`

export const NewClientsNumber = styled.span`
    font-size: ${({ theme }) => theme.fontSize.text_base};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.white};
`
