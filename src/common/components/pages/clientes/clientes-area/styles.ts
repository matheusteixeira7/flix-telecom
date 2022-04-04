import Image from 'next/image'
import styled from 'styled-components'

interface IActiveProps {
    active?: boolean
}

export const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.background_900};
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Content = styled.div`
    background-color: ${({ theme }) => theme.colors.background_900};
    margin: 1.25rem;
    border-radius: 10px;

    header {
        width: 100%;
        padding: 1.25rem;
        background-color: ${({ theme }) => theme.colors.background_700};

        border-bottom: 1px solid ${({ theme }) => theme.colors.background_900};
        border-radius: 10px 10px 0 0;

        display: flex;
        justify-content: space-between;

        input {
            padding: 0.7rem 1rem;
            border-radius: 5px;
            border: none;

            background-color: ${({ theme }) => theme.colors.background_800};
            font-size: ${({ theme }) => theme.fontSize.text_sm};
            color: ${({ theme }) => theme.fontColor.title};
            font-weight: ${({ theme }) => theme.fontWeight.medium};

            &::placeholder {
                font-size: ${({ theme }) => theme.fontSize.text_sm};
                color: ${({ theme }) => theme.fontColor.title};
                font-weight: ${({ theme }) => theme.fontWeight.medium};
            }
        }
    }

    table {
        width: 100%;

        text-align: left;
        border-spacing: 0 1px;

        border-collapse: collapse;
    }

    th {
        font-size: ${({ theme }) => theme.fontSize.text_sm};
        color: ${({ theme }) => theme.fontColor.text_gray_500};
        font-weight: ${({ theme }) => theme.fontWeight.medium};

        padding: 1.25rem;

        background-color: ${({ theme }) => theme.colors.background_700};

        &:last-child {
            text-align: center;
        }
    }

    tr {
        &:hover td {
            transition: all 0.2s ease-in-out;
            background-color: ${({ theme }) => theme.colors.background_800};
        }
    }

    td {
        padding: 0.5rem 0;
        vertical-align: middle;

        font-size: ${({ theme }) => theme.fontSize.text_sm};
        color: ${({ theme }) => theme.fontColor.text_gray_500};
        font-weight: ${({ theme }) => theme.fontWeight.medium};

        padding: 1rem;

        background-color: ${({ theme }) => theme.colors.background_700};
        border-bottom: 1px solid ${({ theme }) => theme.colors.background_900};
        border-top: 1px solid ${({ theme }) => theme.colors.background_900};

        div {
            display: flex;
            align-items: center;
        }

        &:last-child {
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;

            text-align: center;
        }
    }

    span {
        margin-left: 1rem;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
`

export const Dropdown = styled.div`
    position: relative;
    display: block;
`

export const DropdownContent = styled.div<IActiveProps>`
    background: ${({ theme }) => theme.colors.background_700};
    border: 1px solid ${({ theme }) => theme.colors.background_900};
    color: ${({ theme }) => theme.fontColor.title};
    display: ${({ active }) => (active ? 'flex' : 'none')};
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSize.text_sm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    position: absolute;
    width: 13rem;
    z-index: 1;

    ul {
        list-style: none;

        li {
            span {
                cursor: pointer;
                display: block;
                padding: 1rem;
            }

            &:hover {
                background-color: ${({ theme }) => theme.colors.background_800};
                transition: all 0.2s ease-in-out;
            }
        }
    }
`

export const Button = styled.div<IActiveProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.colors.background_800};
    border-radius: 5px;
    border: none;
    cursor: pointer;

    color: ${({ theme }) => theme.fontColor.title};
    font-size: ${({ theme }) => theme.fontSize.text_sm};
    font-weight: ${({ theme }) => theme.fontWeight.medium};

    padding: 0.7rem 1rem;
    position: relative;
    width: 13rem;

    &:first-child {
        margin-right: 1rem;
    }

    span {
        margin-right: 1rem;
    }
`

export const Avatar = styled(Image)`
    border-radius: 50%;

    overflow: hidden;
`
