import styled from 'styled-components'

interface IDotProps {
    color: 'green' | 'purple' | 'blue' | 'yellow'
}

export const Container = styled.div`
    grid-area: main-card;
    background-color: ${({ theme }) => theme.colors.background_800};

    width: 100%;
    height: 100%;

    padding: 1.25rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: 10px;
`
export const Chart = styled.div`
    width: 100%;
    height: 100%;
`

export const Header = styled.header`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${({ theme }) => theme.fontColor.title};

    margin-bottom: 1.25rem;
`

export const Cities = styled.div`
    display: flex;
`

export const City = styled.div`
    margin-left: 2rem;

    display: flex;
    flex-direction: column;
`

export const CityHeader = styled.header`
    display: flex;
    align-items: center;
`

export const Dot = styled.span<IDotProps>`
    display: block;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: ${({ theme, color }) =>
        color === 'green'
            ? theme.colors.success
            : color === 'purple'
            ? theme.colors.secondary
            : color === 'blue'
            ? theme.colors.info
            : theme.colors.warning};

    margin-right: 1rem;
`

export const CityName = styled.span``

export const CityNumber = styled.span`
    align-self: flex-end;
`
